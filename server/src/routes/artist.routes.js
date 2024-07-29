import express from "express";
import {
	getArtists,
	getSingleArtist,
} from "../controllers/artists.controller.js";

const router = express.Router();

router.get("/", getArtists);
router.get("/:id", getSingleArtist);

export default router;
