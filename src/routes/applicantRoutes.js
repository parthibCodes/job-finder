import express from "express";
import { showJobs ,filteredJobs} from "../controllers/applicantController.js";
const router = express.Router();

router.get('/alljobs',showJobs);
router.get('/filterdjobs',filteredJobs);

export default router;