import express from "express";
import {
	geyPlaylist,
	getOurPlaylist,
	addPlaylist,
	deletePlaylist,
} from "../controllers/playlists.controller.js";

const router = express.Router();

router.get("/our-playlist", getOurPlaylist);
router.get("/my-playlist/:id", geyPlaylist);
router.post("/my-playlist", addPlaylist);
router.delete("/my-playlist/:id", deletePlaylist);

export default router;
