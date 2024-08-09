import express from "express";

import {
	getFavorite,
	addFavorite,
	deleteFavorite,
} from "../controllers/favorites.controller.js";

const router = express.Router();

router.post("/", addFavorite);
router.get("/:id", getFavorite);
router.delete("/:id", deleteFavorite);

export default router;
