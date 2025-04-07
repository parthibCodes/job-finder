import Recruiter from "../models/recruiterModel.js";
import {asyncHandler} from "../middlewares/asyncHandler.js";

const showJobs = asyncHandler(async(req,res,next)=>{
    const jobs = await Recruiter.find();
    return res.json({message:"Here are the all jobs:",jobs});
});

const filteredJobs = asyncHandler(async(req,res,next)=>{
    const {location,jobtitle} = req.query;
    let query = {};
    if(location){
        query.location = {$regex:location,$options:"i"};
    }
    if(jobtitle){
        query.jobtitle = {$regex:jobtitle,$options:"i"};
    }
    
    const jobsBasedOnFilter = await Recruiter.find(query);
    if (jobsBasedOnFilter.length === 0) {
        return res.status(404).json({ message: "No jobs found for the given filters." });
    }
    return res.json({ message: "Here are the filtered jobs:", jobs: jobsBasedOnFilter });
})


export {showJobs,filteredJobs};