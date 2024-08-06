export const passwordValidation = (
	newPassword: string,
	confirmPassword: string
): string | null => {
	if (!newPassword || !confirmPassword) {
		return "Fields cannot be empty";
	}

	if (newPassword !== confirmPassword) {
		return "Passwords do not match";
	}

	if (confirmPassword.length < 4) {
		return "Password must be at least 4 characters";
	}

	if (confirmPassword.length > 255) {
		return "Password must be less than 255 characters";
	}

	return null;
};
