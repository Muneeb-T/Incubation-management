import express from "express";
import {
  deleteUser,
  getUser,
  getUsers,
  updateUser,
  blockUser
} from "../controllers/user.js";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";
const router = express.Router();

router.put("/update/:id", updateUser);
router.delete("/delete/:id", deleteUser);
router.get("/getUser/:id", getUser);
router.get("/getUsers",  getUsers);
router.patch("/block-unblock/:id", blockUser);

export default router;


