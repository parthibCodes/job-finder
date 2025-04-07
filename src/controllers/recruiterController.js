import Recruiter from "../models/recruiterModel.js";
import {asyncHandler} from "../middlewares/asyncHandler.js";

const jobPost = asyncHandler(async(req,res,next)=>{
    const {company,jobtitle,position,salaryinlpa,recruitmentType,YOE,location,candidatesCount,jobdescription} = req.body;
    if(!company || !jobtitle || !position || !salaryinlpa || !recruitmentType || !YOE || !location || !candidatesCount || !jobdescription){
        return res.status(400).json({error:"Please provide all the required informations.This will helpful for the candidates"});
    }
    const newJobPost = await Recruiter.create({
        company,
        jobtitle,
        position,
        salaryinlpa,
        recruitmentType,
        YOE,
        location,
        candidatesCount,
        jobdescription
    });
    res.status(201).json({
        message:"Job Posted Successfully",
        Job:{
            company:newJobPost.company,
            jobtitle:newJobPost.jobtitle,
            position:newJobPost.position,
            salaryinlpa:newJobPost.salaryinlpa,
            recruitmentType:newJobPost.recruitmentType,
            YOE:newJobPost.YOE,
            location:newJobPost.location,
            candidatesCount:newJobPost.candidatesCount,
            jobdescription:newJobPost.jobdescription,
            createdAt:newJobPost.createdAt,
            expiresIn:newJobPost.expiresIn
        }
    });
});

export {jobPost};
