import express from "express";
import nodemailer from "nodemailer";
import JoinUs from "../Schemas/JoinUsSchema.js";

const router = express.Router();

// Route for handling "JoinUs" form submissions
router.post("/", async (req, res) => {
  console.log("Request body received:", req.body);
  const { name, email, contactNumber, institute } = req.body;

  try {
    // Check if all fields are filled
    if (!name || !email || !contactNumber || !institute) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check if user already exists
    const existingUser = await JoinUs.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "User already registered with this email" });
    }

    // Create new user
    const newUser = new JoinUs({ name, email, contactNumber, institute });
    await newUser.save();

    // Set up email transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Welcome to Robotics Automation Community",
      text: `Hello ${name},
            Thank you for joining the Robotics Automation Community. We are excited to have you on board!
            Please wait for our response.
            Regards,
            Robotics Automation Community`,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error registering user:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

export default router;
