import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    // Set up nodemailer transporter
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER, // Your email address
        pass: process.env.EMAIL_PASS, // Your email password
      },
    });

    // Email options
    let mailOptions = {
      from: `"${name} via BQ Online Portfolio" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER, // Your email address to receive the submission
      subject: "New Contact Form Submission",
      text: `You have a new contact form submission from ${name} (${email}):\n\n${message}`,
    };

    // Send email
    try {
      await transporter.sendMail(mailOptions);
      res
        .status(200)
        .json({ success: true, message: "Message sent successfully!" });
    } catch (error) {
      console.error("Error sending email:", error);
      res
        .status(500)
        .json({
          success: false,
          message: "Failed to send message.",
          error: error.message,
        });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
