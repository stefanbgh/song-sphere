import express from "express";
import { getSongs, getSingleSong } from "../controllers/songs.controller.js";

const router = express.Router();

router.get("/", getSongs);
router.get("/:id", getSingleSong);

export default router;
