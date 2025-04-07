import express from "express";
import { jobPost } from "../controllers/recruiterController.js";
const router = express.Router();

router.post('/postJob',jobPost);

export default router;