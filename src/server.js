import express from "express";
import "./config/db.js";
import dotenv from "dotenv";
dotenv.config();
import recruiterRoutes from "./routes/recruiterRoutes.js";
import applicantRoutes from "./routes/applicantRoutes.js";
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.use('/api/recruiter',recruiterRoutes);
app.use('/api/applicant',applicantRoutes);
app.listen(port, '0.0.0.0', () => {
    console.log(`Server is running on port ${port}`);
});
  