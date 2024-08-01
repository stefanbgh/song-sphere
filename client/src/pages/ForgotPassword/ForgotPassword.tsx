import { FC, FormEvent, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import AppRoutes from "../../router/Routes";

import mini_logo from "../../assets/mini-logo.png";
import { Footer } from "../../components";

import "./ForgotPassword.less";
import { emailRegex } from "../../utils/helpers/emailRegex";

const ForgotPassword: FC = () => {
	const [err, setErr] = useState<string>("");
	const emailRef = useRef<HTMLInputElement | null>(null);

	const handleForgotPassword = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const email = emailRef!.current!.value.trim();

		if (!emailRegex.test(email)) {
			setErr("Invalid email address");

			return;
		}

		setErr("");
		alert("Check your email address");
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
			<Footer />
		</div>
	);
};

export default ForgotPassword;
