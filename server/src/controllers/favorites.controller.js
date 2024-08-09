import Favorite from "../models/Favorite.js";
import Song from "../models/Song.js";

const getFavorite = async (req, res) => {
	const usr_id = req.params.id;

	try {
		const favoriteSongs = await Favorite.findAll({
			where: {
				fav_usr_id: usr_id,
			},
			attributes: ["fav_sng_id"],
		});

		if (favoriteSongs.length < 1) {
			return res.send({
				msg: "success",
				data: [],
			});
		}

		const songIds = favoriteSongs.map(({ fav_sng_id }) => fav_sng_id);

		const favorite = await Song.findAll({
			where: {
				sng_id: songIds,
			},
		});

		return res.send({
			msg: "success",
			data: favorite,
		});
	} catch (error) {
		return res.status(500).send({
			err: "Internal server error",
		});
	}
};

const addFavorite = async (req, res) => {
	const { sng_id, usr_id } = req.body;

	if (!sng_id || !usr_id) {
		return res.status(401).send({
			err: "Mark the song you want to save as a favorite",
		});
	}

	await Favorite.create({
		fav_sng_id: sng_id,
		fav_usr_id: usr_id,
	});

	return res.send({
		msg: "success",
	});
};

const deleteFavorite = async (req, res) => {
	const sng_id = req.params.id;

	const result = await Favorite.destroy({
		where: { fav_sng_id: sng_id },
	});

	if (result === 0) {
		return res.status(404).send({
			err: "The song was not found",
		});
	}

	return res.send({
		msg: "success",
	});
};

export { getFavorite, addFavorite, deleteFavorite };
