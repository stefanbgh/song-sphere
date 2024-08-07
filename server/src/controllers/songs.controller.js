import Song from "../models/Song.js";

const getSongs = async (req, res) => {
	try {
		const getSongs = await Song.findAll({
			order: [["sng_popularity", "DESC"]],
		});

		if (getSongs.length < 1) {
			return res.status(401).send({
				err: "The songs was not found",
			});
		}

		return res.send({
			msg: "success",
			data: getSongs,
		});
	} catch (error) {
		return res.status(500).send({
			err: "Internal server error",
		});
	}
};

const getSingleSong = async (req, res) => {
	const sng_id = req.params.id;

	try {
		const getSingleSong = await Song.findOne({
			where: { sng_id },
		});

		if (!getSingleSong) {
			return res.status(404).send({
				err: "The song was not found",
			});
		}

		return res.send({
			msg: "success",
			data: getSingleSong,
		});
	} catch (error) {
		return res.status(500).send({
			err: "Internal server error",
		});
	}
};

export { getSongs, getSingleSong };
