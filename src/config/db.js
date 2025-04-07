import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const mongoURI = process.env.DB_URI;

if(!mongoURI){
    console.log("Error in connecting with MongoDB");
}

mongoose.connect(mongoURI,{
    useNewUrlParser:true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("Connected to MongoDB");
}).catch((error)=>{
    console.log("Error in connecting to MongoDB: "+error);
});

export default mongoose;