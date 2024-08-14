require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

// Middleware
app.use(
  cors({
    origin: "https://boyd-querubin-online-portfolio.vercel.app", // Allow requests from your Vercel app
  })
);

app.use(bodyParser.json());

// API endpoint for contact form submissions
app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

  // Set up nodemailer transporter
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER, // Your email address (from environment variable)
      pass: process.env.EMAIL_PASS, // Your email password (from environment variable)
    },
  });

  // Email options
  let mailOptions = {
    from: `"${name} via BQ Online Portfolio" <${process.env.EMAIL_USER}>`, // Sender's name but your email
    to: process.env.EMAIL_USER, // Your email address to receive the submission
    subject: "New Contact Form Submission",
    text: `You have a new contact form submission from ${name} (${email}):\n\n${message}`,
  };

  // Send email
  try {
    await transporter.sendMail(mailOptions);
    res
      .status(200)
      .send({ success: true, message: "Message sent successfully!" });
  } catch (error) {
    res
      .status(500)
      .send({ success: false, message: "Failed to send message.", error });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
