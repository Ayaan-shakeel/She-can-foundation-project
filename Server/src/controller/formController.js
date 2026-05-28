import formModel from '../models/formModel.js';

export const enquiryForm=async(req,res)=>{
    try{
        const {name,email,message}=req.body;
        if(!name || !email || !message){
            return res.status(400).json({message:"Please fill all the fields"})
        }
        if(message.length>50){
            return res.status(400).json({status:0,message:"Message Length should be less than 50"})
        }
        const emailReg=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!emailReg.test(email)){
            return res.status(400).json({status:0,message:"Please enter a valid email"})
        }
        
        const form = await  formModel.create({
            name,
            email,
            message
        })
        res.status(201).json({Status:1,message:"Form Submitted Successfully",form:form})
    }
    catch(error){
        console.log(error);
        res.status(500).json({Status:0,message:error.message})
    }
}
export const getenquiries=async(req,res)=>{
    try{
        const enquiries=await formModel.find().sort({ createdAt: -1 })
        res.status(200).json({status:1,message:"Enquiries Fetched Successfully",enquiries:enquiries})
    }catch(error){
        console.log(error);
        res.status(500).json({status:0,message:error.message})
    }
}