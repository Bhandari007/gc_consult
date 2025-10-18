import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(cors({
  origin: "http://localhost:8080", // your Vite frontend
  methods: ["POST"],
}));
app.use(express.json());

app.post("/api/send-booking-email", async (req, res) => {
  const { name, email, company, phone, preferredDate, preferredTime, message } = req.body;
    console.log("📩 Incoming booking:", req.body);  try {
    // Configure transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Send notification to your personal and official accounts
    await transporter.sendMail({
      from: `"Booking Notification" <${process.env.EMAIL_USER}>`,
      to: "bmuskan007@gmail.com",
      subject: `New Consultation Booking from ${name}`,
      html: `
        <h3>New Consultation Booking</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Service:</b> ${company}</p>
        <p><b>Preferred Date:</b> ${preferredDate}</p>
        <p><b>Preferred Time:</b> ${preferredTime}</p>
        <p><b>Message:</b><br/>${message}</p>
      `,
    });

    // Optional: Confirmation to user
    await transporter.sendMail({
      from: `"Your Company" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Your Consultation Booking Confirmation",
      html: `
        <p>Hi ${name},</p>
        <p>Thank you for booking a consultation with us!</p>
        <p>We’ll reach out to confirm your appointment soon.</p>
        <br/>
        <p>—GC Consulting Team</p>
      `,
    });
    console.log("✅ Email email sent:");

    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ success: false, message: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
