import Artist from "../models/Artist.js";

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
			artists: getArtists,
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

		if (!getSingleArtist) {
			return res.status(404).send({
				err: "The artist was not found",
			});
		}

		return res.send({
			msg: "success",
			artist: getSingleArtist,
		});
	} catch (error) {
		return res.status(500).send({
			err: "Internal server error",
		});
	}
};

export { getArtists, getSingleArtist };
