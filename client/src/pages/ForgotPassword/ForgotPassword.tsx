import { FC, FormEvent, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import AppRoutes from "../../router/Routes";

import mini_logo from "../../assets/mini-logo.webp";
import { Footer, Spinner } from "../../components";

import { emailRegex } from "../../utils/helpers/emailRegex";
import toast from "react-hot-toast";
import { toastOptions } from "../../options/toast.options";
import sb from "../../supabase";

import "./ForgotPassword.less";

const ForgotPassword: FC = () => {
	const [err, setErr] = useState<string>("");
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const emailRef = useRef<HTMLInputElement | null>(null);

	const handleForgotPassword = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const email = emailRef!.current!.value.trim();

		if (!emailRegex.test(email)) {
			setErr("Invalid email address");

			return;
		}

		setErr("");
		setIsLoading(true);

		const { error } = await sb.auth.resetPasswordForEmail(email);

		setIsLoading(false);

		if (error) {
			if (error.status === 429) {
				toast.error(`${error.message}. Try again later`, toastOptions);

				return;
			}

			toast.error(error.message, toastOptions);

			return;
		}

		toast.success("Check your email address", toastOptions);
	};

	return (
		<div className="forgot-password">
			<div className="forgot-password-form">
				<NavLink to={AppRoutes.HOME} className="logo">
					<img width={100} src={mini_logo} alt="logo" />
				</NavLink>
				<h2>Forgot Your Password?</h2>
				<div className="question">
					<p>Go back to</p>
					<NavLink to={AppRoutes.LOGIN}>Login</NavLink>
				</div>
				<form onSubmit={handleForgotPassword}>
					<div>
						<input
							ref={emailRef}
							type="text"
							placeholder="Enter your email"
						/>
					</div>
					<p>
						{err && (
							<>
								Note: <span>{err}</span>
							</>
						)}
					</p>
					<button>Send instructions</button>
				</form>
			</div>
			{isLoading && <Spinner />}
			<Footer />
		</div>
	);
};

export default ForgotPassword;
