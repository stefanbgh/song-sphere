import { IAuth } from "../../ts/interfaces/IAuth";
import { emailRegex } from "./../helpers/emailRegex";

export const registerValidation = (
	firstName: string,
	lastName: string,
	email: string,
	password: string
): IAuth => {
	if (!firstName || !lastName || !email || !password) {
		return {
			msg: "Fields cannot be empty",
			field: null,
		};
	}

	if (firstName.length < 2 || firstName.length > 30) {
		return {
			msg: "First name must be between 2 and 30 characters",
			field: "firstName",
		};
	}

	if (lastName.length < 5 || lastName.length > 50) {
		return {
			msg: "Last name must be between 5 and 50 characters",
			field: "lastName",
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
