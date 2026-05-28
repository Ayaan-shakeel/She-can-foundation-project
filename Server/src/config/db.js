import mongoose from 'mongoose';

export const connectDB=async()=>{
    try{

       await mongoose.connect(process.env.MongoURI)
            console.log("connected to mongodb")
        }catch(error){
            console.log("Connection Failed to MongoDB")
            console.log(error)
        }
    
}