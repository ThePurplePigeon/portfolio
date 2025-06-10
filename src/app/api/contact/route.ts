import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: Request): Promise<Response> {
  try {
    // Parse all fields, including honeypot
    const { name = "", email = "", message = "", website = "" } = await req.json();

    // Honeypot check
    if (website) {
      // Bot detected, pretend success
      return NextResponse.json({ success: true });
    }

    // Clean
    const cleanedName = String(name).trim();
    const cleanedEmail = String(email).trim();
    const cleanedMessage = String(message).trim();

    // Field length check
    if (
      cleanedName.length > 100 ||
      cleanedEmail.length > 320 ||
      cleanedMessage.length > 2000
    ) {
      return NextResponse.json({ error: "Field too long." }, { status:400 });
    }

    // Validate required fields
    if (!cleanedEmail || !isValidEmail(cleanedEmail) || !cleanedMessage) {
      return NextResponse.json({ error: "Missing or invalid fields." }, { status: 400 });
    }

    // Strip HTML from fields
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
  } catch (err) {
    console.error("Email send error: ", err);
    return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
  }
}
