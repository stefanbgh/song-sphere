import Artist from "../models/Artist.js";
import Song from "../models/Song.js";

const home = async (req, res) => {
	try {
		const popularArtists = await Artist.findAll({
			order: [["art_popularity", "DESC"]],
			limit: 6,
		});

		const popularSongs = await Song.findAll({
			order: [["sng_popularity", "DESC"]],
			limit: 6,
		});

		return res.send({
			msg: "success",
			popular_artists: popularArtists,
			popular_songs: popularSongs,
		});
	} catch (error) {
		console.log(error);

		return res.status(500).send({
			err: "Internal server error",
		});
	}
};

export { home };
