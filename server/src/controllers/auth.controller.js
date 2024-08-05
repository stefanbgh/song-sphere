import bcrypt from "bcrypt";
import User from "../models/User.js";
import sb from "../supabase/index.js";

const register = async (req, res) => {
	const { usr_firstname, usr_lastname, usr_email, usr_password } = req.body;

	if (!usr_email || !usr_password) {
		return res.status(400).send({
			err: "Email and password are required",
		});
	}

	const checkEmail = await User.findOne({
		where: { usr_email },
	});

	if (checkEmail) {
		return res.status(401).send({
			err: "Email already exists",
		});
	}

	try {
		const hashPassword = await bcrypt.hash(usr_password, 10);

		const { data, error } = await sb.auth.signUp({
			email: usr_email,
			password: usr_password,
			options: {
				data: {
					display_name: `${usr_firstname} ${usr_lastname}`,
				},
			},
		});

		if (error) {
			return res.status(error.status).send({
				err: error.message,
			});
		}

		await User.create({
			usr_id: data.user.id,
			usr_firstname,
			usr_lastname,
			usr_email,
			usr_password: hashPassword,
		});

		return res.send({
			msg: "success",
			data,
		});
	} catch (error) {
		return res.status(500).send({
			err: "Internal server error",
		});
	}
};

const login = async (req, res) => {
	const { usr_email, usr_password } = req.body;

	if (!usr_email || !usr_password) {
		return res.status(400).send({
			err: "Email and password are required",
		});
	}

	const checkUser = await User.findOne({
		where: { usr_email },
	});

	if (!checkUser) {
		return res.status(404).send({
			err: "The user was not found",
		});
	}

	const checkPassword = await bcrypt.compare(
		usr_password,
		checkUser.usr_password
	);

	if (!checkPassword) {
		return res.status(401).send({
			err: "Password or email is incorrect",
		});
	}

	try {
		const { data, error } = await sb.auth.signInWithPassword({
			email: usr_email,
			password: usr_password,
		});

		if (error) {
			return res.status(error.status).send({
				err: error.message,
			});
		}

		return res.send({
			msg: "success",
			data: data.user.id,
		});
	} catch (error) {
		return res.status(500).send({
			err: "Internal server error",
		});
	}
};

const googleLogin = async (req, res) => {
	const { provider } = req.body;

	try {
		const { data, error } = await sb.auth.signInWithOAuth({
			provider,
		});

		if (error) {
			return res.status(error.status).send({
				err: error.message,
			});
		}

		return res.send({
			msg: "success",
			data: data,
		});
	} catch (error) {
		return res.status(500).send({
			err: "Internal server error",
		});
	}
};

const forgotPassword = async (req, res) => {
	const { usr_email } = req.body;

	if (!usr_email) {
		return res.status(401).send({
			err: "Email is required",
		});
	}

	try {
		const { data, error } = await sb.auth.resetPasswordForEmail(usr_email);

		if (error) {
			return res.status(error.status).send({
				err: error.message,
			});
		}

		return res.send({
			msg: "success",
			data,
		});
	} catch (error) {
		return res.status(500).send({
			err: "Internal server error",
		});
	}
};

const resetPassword = async (req, res) => {
	const { usr_password } = req.body;

	if (!usr_password) {
		return res.status(401).send({
			err: "Password cannot be empty",
		});
	}

	try {
		const hashPassword = await bcrypt.hash(usr_password, 10);

		const { data, error } = await sb.auth.updateUser({
			password: hashPassword,
		});

		if (error) {
			return res.status(error.status).send({
				err: error.message,
			});
		}

		return res.send({
			msg: "success",
			data,
		});
	} catch (error) {
		return res.status(500).send({
			err: "Internal server error",
		});
	}
};

const logout = async (req, res) => {
	const { usr_id } = req.body;

	const checkUser = await User.findOne({
		where: { usr_id },
	});

	if (!checkUser) {
		return res.status(404).send({
			msg: "The user was not found",
		});
	}

	try {
		const { data, error } = await sb.auth.signOut();

		if (error) {
			return res.status(error.status).send({
				err: error.message,
			});
		}

		return res.send({
			msg: "success",
			data,
		});
	} catch (error) {
		return res.status(500).send({
			err: "Internal server error",
		});
	}
};

export { register, login, googleLogin, forgotPassword, resetPassword, logout };
