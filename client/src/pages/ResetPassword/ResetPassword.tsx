import { FC, FormEvent, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import AppRoutes from "../../router/Routes";

import mini_logo from "../../assets/mini-logo.webp";
import { Footer, Spinner } from "../../components";

import toast from "react-hot-toast";
import { toastOptions } from "../../options/toast.options";
import sb from "../../supabase";
import { passwordValidation } from "../../utils/validations/password.validation";

import "./ResetPassword.less";

const ResetPassword: FC = () => {
	const [err, setErr] = useState<string>("");
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const newPasswordRef = useRef<HTMLInputElement | null>(null);
	const confirmPasswordRef = useRef<HTMLInputElement | null>(null);
	const navigate = useNavigate();

	const handleResetPassword = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const newPassword = newPasswordRef!.current!.value.trim();
		const confirmPassword = confirmPasswordRef!.current!.value.trim();

		const res = passwordValidation(newPassword, confirmPassword);

		if (res !== null) {
			setErr(res);

			return;
		}

		setErr("");
		setIsLoading(true);

		const { error } = await sb.auth.updateUser({
			password: confirmPassword,
		});

		setIsLoading(false);

		if (error) {
			toast.error(error.message, toastOptions);

			return;
		}

		toast.success("Password changed successfully", toastOptions);
		navigate(AppRoutes.LOGIN);
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
			{isLoading && <Spinner />}
			<Footer />
		</div>
	);
};

export default ResetPassword;
