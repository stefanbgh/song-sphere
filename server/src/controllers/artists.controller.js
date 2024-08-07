import Artist from "../models/Artist.js";
import Song from "../models/Song.js";

const getArtists = async (req, res) => {
	try {
		const getArtists = await Artist.findAll();

		if (getArtists.length < 1) {
			return res.status(401).send({
				err: "The artists was not found",
			});
		}

		return res.send({
			msg: "success",
			data: getArtists,
		});
	} catch (error) {
		return res.status(500).send({
			err: "Internal server error",
		});
	}
};

const getSingleArtist = async (req, res) => {
	const art_id = req.params.id;

	try {
		const getSingleArtist = await Artist.findOne({
			where: { art_id },
		});

		const getPopularSongs = await Song.findAll({
			where: {
				sng_art_id: art_id,
			},
			limit: 3,
		});

		if (!getSingleArtist) {
			return res.status(404).send({
				err: "The artist was not found",
			});
		}

		return res.send({
			msg: "success",
			data: {
				artist: getSingleArtist,
				popular_songs: getPopularSongs,
			},
		});
	} catch (error) {
		return res.status(500).send({
			err: "Internal server error",
		});
	}
};

export { getArtists, getSingleArtist };
