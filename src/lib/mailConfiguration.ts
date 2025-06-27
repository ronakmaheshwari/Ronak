"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactFormData {
  name: string;
  email: string;
  message: string;
  subject?: string;
}

function createContactEmailTemplate({ name, email, message }: ContactFormData): string {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>New Contact Form Submission</title>
        <style>
            body { font-family: sans-serif; background: #f4f4f4; padding: 20px; }
            .container { max-width: 600px; background: #fff; margin: auto; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 8px rgba(0,0,0,0.1); }
            .header { background: linear-gradient(135deg, #667eea, #764ba2); color: #fff; padding: 20px; text-align: center; }
            .content { padding: 30px; }
            .label { font-weight: bold; margin-top: 20px; color: #444; }
            .value { margin: 5px 0 15px; padding: 12px; background: #f7f7f7; border-radius: 6px; }
            .footer { text-align: center; font-size: 13px; color: #999; padding: 20px; background: #f9f9f9; }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h2>📩 New Message Received</h2>
                <p>From your portfolio contact form</p>
            </div>
            <div class="content">
                <div class="label">👤 Name</div>
                <div class="value">${name}</div>

                <div class="label">📧 Email</div>
                <div class="value"><a href="mailto:${email}" style="color:#667eea;">${email}</a></div>

                <div class="label">💬 Message</div>
                <div class="value" style="white-space:pre-wrap;">${message}</div>
            </div>
            <div class="footer">
                Received on ${new Date().toLocaleString()}
            </div>
        </div>
    </body>
    </html>
  `;
}

export async function sendMail({ name, email, message, subject }: ContactFormData) {
  if (!name || !email || !message || !email.includes("@")) {
    console.error("❌ Invalid contact form data");
    return false;
  }

  const htmlBody = createContactEmailTemplate({ name, email, message });
  const emailSubject = subject?.trim()
    ? `📬 ${subject} – ${name}`
    : `New Contact Form Submission from ${name}`;

  try {
    const response = await resend.emails.send({
      from: "Contact Form <no-reply@ronakmaheshwari.dev>", // Your verified domain
      to: "ronakmaheshwari077@gmail.com",
      subject: emailSubject,
      html: htmlBody,
      text: `
Name: ${name}
Email: ${email}
Message: ${message}
      `.trim(),
      replyTo: email,
    });

    return response.data?.id ? true : false;
  } catch (error) {
    console.error("❌ Email sending failed:", error);
    return false;
  }
}
