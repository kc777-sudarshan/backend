import express from "express";
import cors from "cors";
import { connectDB } from './config/db.js';
import foodRoute from './routes/foodRoute.js';

const app = express();
const port = 4000;

// // Middleware
app.use(express.json());
app.use(cors());
app.use("/upload", express.static("upload"));

// API Endpoint
app.use("/api/food", foodRoute);

// Database Connection
connectDB();

// // Test Endpoint
app.get("/", (req, res) => {
    console.log("GET / called");
    res.send("API Working");
});

// Start Server
app.listen(port, () => {
    console.log(`Server Started on http://localhost:${port}`);
});
