import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

async function sendTestMail() {
  try {
    const info = await transporter.sendMail({
      from: `"Server Test" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: "Nodemailer Test",
      text: "If you receive this, your mail config works ✅",
    });
    console.log("✅ Test email sent:", info.response);
  } catch (err) {
    console.error("❌ Error:", err);
  }
}

sendTestMail();
