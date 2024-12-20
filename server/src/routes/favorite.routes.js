import express from "express";

import {
	getFavorite,
	addFavorite,
	deleteFavorite,
} from "../controllers/favorites.controller.js";

const router = express.Router();

router.post("/", addFavorite);
router.delete("/", deleteFavorite);
router.get("/:id", getFavorite);

export default router;
