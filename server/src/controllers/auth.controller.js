import bcrypt from "bcrypt";
import User from "../models/User.js";
import sb from "../supabase/index.js";

const register = async (req, res) => {
	const { firstname, lastname, email, password } = req.body;

	if (!email || !password) {
		return res.status(400).send({
			err: "Email and password are required",
		});
	}

	const checkEmail = await User.findOne({
		where: { usr_email: email },
	});

	if (checkEmail) {
		return res.status(401).send({
			err: "Email already exists",
		});
	}

	try {
		const hashPassword = await bcrypt.hash(password, 10);

		await User.create({
			usr_firstname: firstname,
			usr_lastname: lastname,
			usr_email: email,
			usr_password: hashPassword,
		});

		const { user, session, error } = await sb.auth.signUp({
			email,
			password,
		});

		if (error) {
			throw new Error("Internal server error");
		}

		return res.send({
			msg: "success",
		});
	} catch (error) {
		return res.status(500).send({
			err: "Internal server error",
		});
	}
};

const login = async (req, res) => {
	const { email, password } = req.body;

	if (!email || !password) {
		return res.status(400).send({
			err: "Email and password are required",
		});
	}

	const checkUser = await User.findOne({
		where: { usr_email: email },
	});

	if (!checkUser) {
		return res.status(404).send({
			err: "The user was not found",
		});
	}

	const checkPassword = await bcrypt.compare(
		password,
		checkUser.usr_password
	);

	if (!checkPassword) {
		return res.status(401).send({
			err: "Email or password is incorrect",
		});
	}

	try {
		const { data, error } = await supabaseClient.auth.signInWithPassword({
			email,
			password,
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

const logout = async (req, res) => {
	const cookies = req.cookies;
	const usr_id = req.query.usr_id;

	if (!cookies?.jwt) {
		return res.send({
			msg: "success",
		});
	}

	const checkUser = await User.findOne({
		where: { usr_id },
	});

	if (!checkUser) {
		return res.status(404).send({
			msg: "The user was not found",
		});
	}

	try {
		const { data, error } = await supabaseClient.auth.signOut();

		if (error) {
			throw new Error("Internal server error");
		}

		return res.send({
			msg: "success",
		});
	} catch (error) {
		return res.status(500).send({
			err: "Internal server error",
		});
	}
};

export { register, login, logout };
