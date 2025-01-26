import mongoose from "mongoose";
 export const connectDB=async()=>{
    await mongoose.connect('mongodb+srv://skc:suddd@cluster0.uuqco.mongodb.net/food-del').then(()=>console.log("db connect"));
    
}