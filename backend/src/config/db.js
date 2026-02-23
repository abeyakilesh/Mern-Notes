import mongoose from "mongoose";

export const connectDB = async ()=>{
    try{
       await mongoose.connect("mongodb+srv://notesuser:notes1234@cluster0.k5babmi.mongodb.net/notesdb?retryWrites=true&w=majority");
       console.log("MongoDB Connected Succesfully");
    }
    catch(error){
       console.error("Error Connecting to MongoDB",error);
    }
}
