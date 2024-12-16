import mongoose from "mongoose";
import dotenv from "dotenv"

export const connectDb = async()=>{
    await mongoose.connect()
        .then(()=> console.log("mongodb connected"))
        .catch((error)=> console.log( error))
    await mongoose.connect(process.env.MONGO_URL)
        .then(()=> console.log("mongodb connected"))
        .catch((error)=> console.log( error))
}
    





