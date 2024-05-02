import express from "express";
import { updateUser, user } from "../controllers/user.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.get("/user", user);
router.put("/update/:userId", verifyToken, updateUser);

export default router;
