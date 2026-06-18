import { NextResponse } from "next/server";
import { Resend } from "resend";

const MAX_BODY_BYTES = 4096;

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function stripHeaderControls(value: string) {
  return value.replace(/[\r\n]+/g, " ").replace(/[\u0000-\u001F\u007F]+/g, " ").trim();
}

export async function POST(req: Request): Promise<Response> {

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: "Email service not configured. Please try again later." },
      { status: 500 }
    );
  }

  const resend = new Resend(apiKey);

  try {
    const contentLength = Number(req.headers?.get("content-length") ?? "0");
    if (contentLength > MAX_BODY_BYTES) {
      return NextResponse.json({ error: "Request too large." }, { status: 413 });
    }

    const contentType = req.headers?.get("content-type") ?? "";
    if (contentType && !contentType.toLowerCase().includes("application/json")) {
      return NextResponse.json({ error: "Unsupported content type." }, { status: 415 });
    }

    let payload: unknown;
    try {
      payload = await req.json();
    } catch {
      return NextResponse.json({ error: "Invalid JSON." }, { status: 400 });
    }

    if (!payload || typeof payload !== "object" || Array.isArray(payload)) {
      return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
    }

    const { name = "", email = "", message = "", website = "" } = payload as Record<string, unknown>;

    if (website) return NextResponse.json({ success: true });

    const cleanedName = String(name).trim();
    const cleanedEmail = String(email).trim();
    const cleanedMessage = String(message).trim();
    if (
      cleanedName.length > 100 ||
      cleanedEmail.length > 320 ||
      cleanedMessage.length > 2000
    ) {
      return NextResponse.json({ error: "Field too long." }, { status: 400 });
    }
    if (!cleanedEmail || !isValidEmail(cleanedEmail) || !cleanedMessage) {
      return NextResponse.json({ error: "Missing or invalid fields." }, { status: 400 });
    }
    const cleanName = stripHeaderControls(cleanedName);
    const cleanEmail = cleanedEmail.replace(/[\r\n\u0000-\u001F\u007F]+/g, "");
    const cleanMessage = cleanedMessage.replace(/<[^>]*>?/gm, "");

    await resend.emails.send({
      from: "Contact Form <contact@joshuahughes.com>",
      to: "joshua@hughesonthenet.com",
      subject: `New Message from ${cleanName || "Anonymous"}`,
      replyTo: cleanEmail,
      text: `From: ${cleanName}\nEmail: ${cleanEmail}\n\n${cleanMessage}`,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
  }
}
