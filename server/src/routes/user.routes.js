import express from "express";
import {
	getSingleUser,
	addUser,
	updateUser,
	deleteUser,
} from "../controllers/user.controller.js";

const router = express.Router();

router.post("/", addUser);
router.get("/:id", getSingleUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;
