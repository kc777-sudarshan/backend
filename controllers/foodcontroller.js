
import foodModel from "../models/foodmodels.js";

import fs from "fs";

 const addFood = async (req, res) => {
    try {
        // Log the incoming request
        console.log("Request Body:", req.body);
        console.log("Uploaded File:", req.file);

        if (!req.file) {
            return res.status(400).json({ success: false, message: "No file uploaded" });
        }

        const food = new foodModel({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            category: req.body.category,
            image: `upload/${req.file.filename}`,


        });

        await food.save();
        res.status(201).json({ success: true, message: "Food added successfully" });
    } catch (error) {
        console.error("Error adding food:", error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};
export { addFood }