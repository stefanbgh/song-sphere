import User from "../models/User.js";
import Favorite from "../models/Favorite.js";
import Playlist from "../models/Playlist.js";

const getSingleUser = async (req, res) => {
	const usr_id = req.params.id;

	try {
		const getSingleUser = await User.findOne({
			where: { usr_id },
		});

		if (!getSingleUser) {
			return res.status(404).send({
				err: "The user was not found",
			});
		}

		return res.send({
			msg: "success",
			user: getSingleUser,
		});
	} catch (error) {
		return res.status(500).send({
			err: "Internal server error",
		});
	}
};

const yourActivity = async (req, res) => {
	const usr_id = req.params.id;

	try {
		const favoriteCount = await Favorite.count({
			where: {
				fav_usr_id: usr_id,
			},
		});

		const playlistCount = await Playlist.count({
			where: {
				ply_usr_id: usr_id,
			},
		});

		return res.send({
			msg: "success",
			favorites: favoriteCount,
			playlists: playlistCount,
		});
	} catch (error) {
		return res.status(500).send({
			err: "Internal server error",
		});
	}
};

const addUser = async (req, res) => {
	const { usr_firstname, usr_lastname, usr_email, usr_password } = req.body;

	if (!usr_firstname || !usr_lastname || !usr_email || !usr_password) {
		return res.status(401).send({
			err: "Fields must not be empty",
		});
	}

	const checkUser = await User.findOne({
		where: { usr_email },
	});

	if (checkUser) {
		return res.status(401).send({
			err: "User already exists",
		});
	}

	try {
		await User.create({
			usr_firstname,
			usr_lastname,
			usr_email,
			usr_password,
		});

		return res.send({
			msg: "success",
		});
	} catch (error) {
		return res.status(500).send({
			err: "Internal server error",
		});
	}
};

const updateUser = async (req, res) => {
	const dto = req.body;

	const checkUser = await User.findOne({
		where: { usr_username: username },
	});

	if (checkUser) {
		return res.status(401).send({
			err: "Username already exists",
		});
	}

	await User.update(dto, { where: { usr_id: req.params.id } });

	return res.send({
		msg: "success",
	});
};

const deleteUser = async (req, res) => {
	const usr_id = req.params.id;

	const result = await User.destroy({ where: { usr_id } });

	if (result === 0) {
		return res.status(404).send({
			err: "The user was not found",
		});
	}

	return res.send({
		msg: "success",
	});
};

export { getSingleUser, yourActivity, addUser, updateUser, deleteUser };
