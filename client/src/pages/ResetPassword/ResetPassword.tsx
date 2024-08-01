import { FC, FormEvent, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import AppRoutes from "../../router/Routes";

import mini_logo from "../../assets/mini-logo.png";
import { Footer } from "../../components";

import "./ResetPassword.less";

const ResetPassword: FC = () => {
	const [err, setErr] = useState<string>("");

	const newPasswordRef = useRef<HTMLInputElement | null>(null);
	const confirmPasswordRef = useRef<HTMLInputElement | null>(null);

	const handleResetPassword = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const newPassword = newPasswordRef!.current!.value.trim();
		const confirmPassword = confirmPasswordRef!.current!.value.trim();

		if (!newPassword || !confirmPassword) {
			setErr("Fields cannot be empty");

			return;
		}

		if (newPassword !== confirmPassword) {
			setErr("Passwords do not match");

			return;
		}

		if (confirmPassword.length < 4) {
			setErr("Password must be at least 4 characters");

			return;
		}

		if (confirmPassword.length > 255) {
			setErr("Password must be less than 255 characters");

			return;
		}

		setErr("");
		alert("Password changed successfully");
	};

	return (
		<div className="reset-password">
			<div className="reset-password-form">
				<NavLink to={AppRoutes.HOME} className="logo">
					<img width={100} src={mini_logo} alt="logo" />
				</NavLink>
				<h2>Reset Your Password</h2>
				<div className="question">
					<p>Go back to</p>
					<NavLink to={AppRoutes.LOGIN}>Login</NavLink>
				</div>
				<form onSubmit={handleResetPassword}>
					<div>
						<input
							type="password"
							placeholder="New password"
							ref={newPasswordRef}
						/>
					</div>
					<div>
						<input
							type="password"
							placeholder="Confirm new password"
							ref={confirmPasswordRef}
						/>
					</div>
					<p className="error-msg">
						{err && (
							<>
								Note: <span>{err}</span>
							</>
						)}
					</p>
					<button>Reset password</button>
				</form>
			</div>
			<Footer />
		</div>
	);
};

export default ResetPassword;
