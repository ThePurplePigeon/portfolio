import { NextResponse } from "next/server";
import { Resend } from "resend";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
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
    const { name = "", email = "", message = "", website = "" } = await req.json();

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
    const cleanName = cleanedName.replace(/[\r\n]+/g, " ");
    const cleanEmail = cleanedEmail.replace(/[\r\n]+/g, "");
    const cleanMessage = cleanedMessage.replace(/<[^>]*>?/gm, "");

    await resend.emails.send({
      from: "Contact Form <contact@joshuahughes.com>",
      to: "joshua@hughesonthenet.com",
      subject: `New Message from ${cleanedName || "Anonymous"}`,
      replyTo: cleanedEmail,
      text: `From: ${cleanName}\nEmail: ${cleanEmail}\n\n${cleanMessage}`,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
  }
}
