import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import {connectDB} from './src/config/db.js';
import {formRouter} from './src/routes/formRoutes.js';
dotenv.config();
const app=express();
app.use(express.json());
app.use(cors({
    origin:["http://localhost:5174",
        "https://she-can-foundation-project-two.vercel.app"]
    }));
app.use("/api/form",formRouter)
connectDB();
app.listen(process.env.PORT || 7000,()=>{
    console.log("Server is running on Port")
})
