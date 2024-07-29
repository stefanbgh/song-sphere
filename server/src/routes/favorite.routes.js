import express from "express";

import {
	getFavorite,
	addFavorite,
	deleteFavorite,
} from "../controllers/favorites.controller.js";

const router = express.Router();

router.get("/", getFavorite);
router.post("/", addFavorite);
router.delete("/:id", deleteFavorite);

export default router;
