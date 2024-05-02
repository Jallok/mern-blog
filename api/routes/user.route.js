import express from "express";
import {
  deleletUser,
  signout,
  updateUser,
  user,
} from "../controllers/user.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.get("/user", user);
router.put("/update/:userId", verifyToken, updateUser);
router.delete("/delete/:userId", verifyToken, deleletUser);
router.post("/signout", signout)

export default router;
