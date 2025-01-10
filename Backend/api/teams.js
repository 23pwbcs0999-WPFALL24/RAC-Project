import express from "express";
import teamData from "../Schemas/teamDataSchema.js";

const router = express.Router();

// Route to fetch team data
router.get("/", async (req, res) => {
  try {
    const data = await teamData.find();
    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching team data:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

export default router;
