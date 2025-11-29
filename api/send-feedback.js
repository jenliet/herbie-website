// api/send-feedback.js
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ ok: false, error: "Method not allowed" });
    return;
  }

  const { name, email, subject, message } = req.body || {};

  if (!name || !email || !subject || !message) {
    res.status(400).json({ ok: false, error: "Missing fields" });
    return;
  }

  // Create transporter (example: Gmail – you can change this later)
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER, // set in Vercel
      pass: process.env.EMAIL_PASS, // set in Vercel
    },
  });

  try {
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_TO || process.env.EMAIL_USER,
      subject: subject,
      text: message,
    });

    res.status(200).json({ ok: true });
  } catch (error) {
    console.error("Email error:", error);
    res.status(500).json({ ok: false, error: "Failed to send email" });
  }
}
