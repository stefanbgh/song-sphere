import { IAuth } from "../../ts/interfaces/IAuth";
import { emailRegex } from "./../helpers/emailRegex";

export const loginValidation = (email: string, password: string): IAuth => {
	if (!email || !password) {
		return {
			msg: "Fields cannot be empty",
			field: null,
		};
	}

	if (!emailRegex.test(email)) {
		return {
			msg: "Invalid email address",
			field: "email",
		};
	}

	if (email.length > 255) {
		return {
			msg: "Email must be at less than 255 characters",
			field: "email",
		};
	}

	if (password.length < 4) {
		return {
			msg: "Password must be at least 4 characters",
			field: "password",
		};
	}

	if (password.length > 255) {
		return {
			msg: "Password must be less than 255 characters",
			field: "password",
		};
	}

	return {
		msg: null,
		field: null,
	};
};
