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

		await User.create({
			usr_firstname,
			usr_lastname,
			usr_email,
			usr_password: hashPassword,
		});

		const { data, error } = await sb.auth.signUp({
			usr_email,
			usr_password,
			options: {
				data: {
					display_name: `${usr_firstname} ${usr_lastname}`,
				},
			},
		});

		if (error) {
			throw new Error("Internal server error");
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
			err: "Email or password is incorrect",
		});
	}

	try {
		const { data, error } = await supabaseClient.auth.signInWithPassword({
			usr_email,
			usr_password,
		});

		if (error) {
			throw new Error("Internal server error");
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

const googleLogin = async (req, res) => {
	const { provider } = req.body;

	try {
		const { data, error } = await sb.auth.signInWithOAuth({
			provider,
		});

		if (error) {
			throw new Error(error);
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
			throw new Error("Internal server error");
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

export { register, login, googleLogin, logout };
