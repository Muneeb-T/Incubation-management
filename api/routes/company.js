import express from "express";
import {
  registerCompany,
  getCompany,
  getApplications,
  changeApplicationStatus,
  getCompanyList,
  bookSlot,
} from "../controllers/company.js";
import multerUpload from "../middlewares/multer.js";

import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";
const router = express.Router();

router.post(
  "/registerCompany",
  verifyUser,
  multerUpload.single("companyLogo"),
  registerCompany
);
router.get("/getCompany/:id", getCompany);
router.get("/getApplications/:applicationStatus", getApplications);
router.patch("/changeApplicationStatus/:id", changeApplicationStatus);
router.get("/getCompanyList", getCompanyList);
router.post("/bookSlot", bookSlot);

export default router;
