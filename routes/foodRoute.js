// routes/foodRoute.js
import express from "express";
import multer from "multer";
import fs from "fs";
import { addFood } from "../controllers/foodController.js";
const foodRouter = express.Router();
// Multer Configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = "upload";
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir);
    }
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

// Routes
foodRouter.post('/add', upload.single('image'), (req, res) => {
  try {
    console.log("File:", req.file);
    console.log("Body:", req.body);

    if (!req.file) {
      return res.status(400).json({ success: false, message: "No file uploaded!" });
    }

    addFood(req, res); 

  } catch (error) {
    console.error("Error uploading file:", error);
    res.status(500).json({ success: false, message: "Internal server error", error: error.message });
  }
});

export default foodRouter;