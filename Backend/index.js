import express from "express";
import mongoose from "mongoose";
import nodemailer from "nodemailer";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import joinUsRouter from "./api/joinus.js"; // Import the JoinUs route
import collaborateRouter from "./api/collaborate.js"; // Import the Collaborate route
import teamDataRouter from "./api/teams.js";
// Import the Team route

dotenv.config(); // Load environment variables from .env file

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware setup
app.use(
  cors({
    origin: [
      "https://racproject.vercel.app",
      "http://localhost:3001",
      // Add your Vercel frontend URL if different
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
  })
);

app.use(bodyParser.json()); // Parse incoming JSON requests

// MongoDB Connection
const mongo_URI =
  process.env.MONGO_URI || "mongodb://127.0.0.1:27017/RAC_Project";

// Connect to MongoDB using Mongoose
mongoose
  .connect(mongo_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Add this before your routes
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

// Routes
app.get("/", async (req, res) => {
  res.json("hello bhai server chal rha hai"); // Endpoint to test server connectivity
});

// Use the modular routes for different endpoints
app.use("/JoinUs", joinUsRouter); // Use the JoinUs route for '/JoinUs' endpoint
app.use("/Collaborate", collaborateRouter); // Use the Collaborate route for '/Collaborate' endpoint
app.use("/teamData", teamDataRouter); // Use the Team Data route for '/teamData' endpoint

// Start Server
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
); // Start the Express server
