import { FC, FormEvent, useRef, useState } from "react";

import { NavLink, useNavigate } from "react-router-dom";
import AppRoutes from "../../router/Routes";

import { FcGoogle } from "react-icons/fc";

import mini_logo from "../../assets/mini-logo.webp";
import { Footer, Spinner } from "../../components";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

import { loginValidation } from "../../utils/validations/login.validation";
import { IAuth } from "../../ts/interfaces/IAuth";

import toast from "react-hot-toast";
import { toastOptions } from "../../options/toast.options";
import { sbAuth } from "../../constants/sbAuth.constant";
import {
	usePostGoogleLoginMutation,
	usePostLoginMutation,
} from "../../features/api/auth,api";
import { Err } from "../../ts/types/Err";

import "./Login.less";

const Login: FC = () => {
	const [err, setErr] = useState<IAuth>({ msg: "", field: null });
	const [isVisible, setIsVisible] = useState<boolean>(false);
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const [postLogin] = usePostLoginMutation();
	const [postGoogleLogin] = usePostGoogleLoginMutation();

	const navigate = useNavigate();

	const emailRef = useRef<HTMLInputElement | null>(null);
	const passwordRef = useRef<HTMLInputElement | null>(null);

	const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const email = emailRef!.current!.value.trim();
		const password = passwordRef!.current!.value.trim();

		const { msg, field } = loginValidation(email, password);

		if (msg !== null) {
			setErr({ msg, field });

			return;
		}

		setIsLoading(true);
		setErr({ msg: "", field: null });

		const res = await postLogin({
			usr_email: email,
			usr_password: password,
		});

		if (res.error) {
			const error = res.error as Err;

			toast.error(error.data.err, toastOptions);

			setIsLoading(false);

			return;
		}

		setIsLoading(false);

		toast.success("Successfully logged in", toastOptions);
		localStorage.setItem(sbAuth, res.data.data as string);
		navigate(AppRoutes.HOME);
	};

	const handleGoogleLogin = async () => {
		const res = await postGoogleLogin({ provider: "google" });

		window.location.href = res.data?.data.url;
	};

	return (
		<div className="login">
			<div className="login-form">
				<NavLink to={AppRoutes.HOME} className="logo">
					<img width={100} src={mini_logo} alt="logo" />
				</NavLink>
				<h2>Login to SongSphere</h2>
				<div className="question">
					<p>Don't have an account?</p>
					<NavLink to={AppRoutes.REGISTER}>Register</NavLink>
				</div>
				<button className="google" onClick={handleGoogleLogin}>
					<FcGoogle size={25} />
					<p>Login with Google</p>
				</button>
				<div className="hr">
					<hr />
					<p>or</p>
					<hr />
				</div>
				<form onSubmit={handleLogin}>
					<div>
						<input
							ref={emailRef}
							type="text"
							placeholder="Enter your email"
							className={err.field === "email" ? "err" : ""}
						/>
					</div>
					<div className="login-password">
						<input
							ref={passwordRef}
							type={isVisible ? "text" : "password"}
							placeholder="Enter your password"
							className={err.field === "password" ? "err" : ""}
						/>
						{isVisible ? (
							<IoEyeOutline
								className="icon"
								onClick={() => setIsVisible(false)}
							/>
						) : (
							<IoEyeOffOutline
								className="icon"
								onClick={() => setIsVisible(true)}
							/>
						)}
					</div>
					<p className="error-msg">
						{err.msg && (
							<>
								Note: <span>{err.msg}</span>
							</>
						)}
					</p>
					<div>
						<NavLink to={AppRoutes.FORGOT_PASSWORD}>
							Forgot Password?
						</NavLink>
						<button>Login</button>
					</div>
				</form>
			</div>
			{isLoading && <Spinner />}
			<Footer />
		</div>
	);
};

export default Login;
