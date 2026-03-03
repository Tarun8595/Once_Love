require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const multer = require("multer");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Multer for image upload
const upload = multer({
  storage: multer.memoryStorage(),
});

// Route
app.post("/send-love-story", upload.single("image"), async (req, res) => {
  const { username, partner_name, love_duration, email, love_advice } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "New Love Story Submission 💌",
      html: `
        <h2>Love Story Details</h2>
        <p><strong>Name:</strong> ${username}</p>
        <p><strong>Partner Name:</strong> ${partner_name}</p>
        <p><strong>Love Duration:</strong> ${love_duration || "Not Provided"}</p>
        <p><strong>User Email:</strong> ${email}</p>
        <p><strong>Love Advice:</strong></p>
        <p>${love_advice}</p>
      `,
      attachments: req.file
        ? [
            {
              filename: req.file.originalname,  
              content: req.file.buffer,
            },
          ]
        : [],
    });

    res.status(200).json({ message: "Email Sent Successfully" });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to send email" });
  }
});

// Start server
app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
  console.log("EMAIL_USER:", process.env.EMAIL_USER);
  console.log("EMAIL_PASS:", process.env.EMAIL_PASS);
});