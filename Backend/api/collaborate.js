// export default router;
import express from "express";
import nodemailer from "nodemailer";
import Collaborate from "../Schemas/CollaborateSchema.js";

const router = express.Router();

// Route for handling "Collaborate" form submissions
router.post("/", async (req, res) => {
  const { instituteName, instituteEmail } = req.body;

  try {
    // Save the collaboration request to the database
    const collaborator = new Collaborate({ instituteName, instituteEmail });
    await collaborator.save();

    // Set up email transporter using nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Sender's email from environment variables
        pass: process.env.EMAIL_PASS, // Sender's email password from environment variables
      },
    });

    // Set up the collaboration email content
    const mailOptions = {
      from: process.env.EMAIL_USER, // Sender's email
      to: instituteEmail, // Recipient's email (institute's email)
      subject: "Collaboration Request", // Email subject
      text: `Hello ${instituteName},\n\nThank you for your interest in collaborating with us. We will get back to you soon.\n\nBest regards,\nRobotics Automation Community`, // Email body
    };

    // Send the collaboration email
    await transporter.sendMail(mailOptions);

    // Respond with a success message
    res
      .status(200)
      .json({ message: "Collaboration request sent successfully" });
  } catch (error) {
    console.error("Error sending collaboration request:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

export default router;
