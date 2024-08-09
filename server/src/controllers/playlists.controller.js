import Playlist from "../models/Playlist.js";
import Song from "../models/Song.js";

const geyPlaylist = async (req, res) => {
	try {
		const playlistSongs = await Playlist.findAll({
			where: {
				ply_usr_id: 1,
			},
			attributes: ["ply_sng_id"],
		});

		if (playlistSongs.length < 1) {
			return res.send({
				msg: "success",
				data: [],
			});
		}

		const songIds = playlistSongs.map(({ ply_sng_id }) => ply_sng_id);

		const playlist = await Song.findAll({
			where: {
				sng_id: songIds,
			},
		});

		return res.send({
			msg: "success",
			data: playlist,
		});
	} catch (error) {
		return res.status(500).send({
			err: "Internal server error",
		});
	}
};

const getOurPlaylist = async (req, res) => {
	try {
		const playlistSongs = await Song.findAll({
			order: [["sng_popularity", "ASC"]],
			limit: 8,
		});

		if (playlistSongs.length < 1) {
			return res.send({
				msg: success,
				data: [],
			});
		}

		return res.send({
			msg: "success",
			data: playlistSongs,
		});
	} catch (error) {
		return res.status(500).send({
			err: "Internal server error",
		});
	}
};

const addPlaylist = async (req, res) => {
	const { sng_id, usr_id } = req.body;

	if (!sng_id || !usr_id) {
		return res.status(401).send({
			err: "Mark the song you want to save in the favorite",
		});
	}

	await Playlist.create({
		ply_sng_id: sng_id,
		ply_usr_id: usr_id,
	});

	return res.send({
		msg: "success",
	});
};

const deletePlaylist = async (req, res) => {
	const ply_id = req.params.id;

	const result = await Playlist.destroy({ where: { ply_id } });

	if (result === 0) {
		return res.status(404).send({
			err: "The song was not found",
		});
	}

	return res.send({
		msg: "success",
	});
};

export { geyPlaylist, getOurPlaylist, addPlaylist, deletePlaylist };
