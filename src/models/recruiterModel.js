import mongoose from "mongoose";

const recruiterSchema = new mongoose.Schema({
  company: {
    type: String,
    required: true,
  },
  jobtitle: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  salaryinlpa: {
    type:String,
    required:true
  },
  recruitmentType:{
    type:String,
    enum:["intern","full-time","part-time","freelancer","remote"],
    required:true
  },
  YOE:{
    type:String,
    required:true
  },
  location:{
    type: String,
    required: true,
  },
  candidatesCount:{
    type:Number,
    required:true
  },
  jobdescription:{
    type: String,
    required: true,
  },
  createdAt:{
    type:Date,
    default:()=>new Date().toISOString()
  },
  expiresIn:{
    type:Date,
    default: () => new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString()
  }
});

const Recruiter = new mongoose.model("Recruiter",recruiterSchema);
export default Recruiter;