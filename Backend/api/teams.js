import express from "express";
import teamData from "../Schemas/teamDataSchema.js";

const router = express.Router();

// Route to fetch team data
router.get("/", async (req, res) => {
  try {
    const teams = await teamData.find();
    console.log("Teams found:", teams);
    res.json(teams);
  } catch (error) {
    console.error("Error fetching teams:", error);
    res
      .status(500)
      .json({ message: "Error fetching teams", error: error.message });
  }
});

export default router;
