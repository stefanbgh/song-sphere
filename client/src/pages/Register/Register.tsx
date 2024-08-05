import { FC, FormEvent, useRef, useState } from "react";

import { NavLink, useNavigate } from "react-router-dom";
import AppRoutes from "../../router/Routes";

import { Footer, Spinner } from "../../components";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

import mini_logo from "../../assets/mini-logo.webp";
import { registerValidation } from "../../utils/validations/register.validation";
import { IAuth } from "../../ts/interfaces/IAuth";
import { usePostRegisterMutation } from "../../features/api/auth,api";
import toast from "react-hot-toast";
import { toastOptions } from "../../options/toast.options";
import { Err } from "../../ts/types/Err";

import "./Register.less";

const Register: FC = () => {
	const [err, setErr] = useState<IAuth>({ msg: "", field: null });
	const [isVisible, setIsVisible] = useState<boolean>(false);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [postRegister] = usePostRegisterMutation();

	const navigate = useNavigate();

	const firstNameRef = useRef<HTMLInputElement | null>(null);
	const lastNameRef = useRef<HTMLInputElement | null>(null);
	const emailRef = useRef<HTMLInputElement | null>(null);
	const passwordRef = useRef<HTMLInputElement | null>(null);

	const handleRegister = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const firstName = firstNameRef!.current!.value.trim();
		const lastName = lastNameRef!.current!.value.trim();
		const email = emailRef!.current!.value.trim();
		const password = passwordRef!.current!.value.trim();

		const { msg, field } = registerValidation(
			firstName,
			lastName,
			email,
			password
		);

		if (msg !== null) {
			setErr({ msg, field });

			return;
		}

		setIsLoading(true);

		const res = await postRegister({
			usr_firstname: firstName,
			usr_email: email,
			usr_lastname: lastName,
			usr_password: password,
		});

		if (res.error) {
			setIsLoading(false);

			const error = res.error as Err;

			if (error.status === 429) {
				toast.error(`${error.data.err}. Try again later`, toastOptions);

				return;
			}

			toast.error(error.data.err, toastOptions);

			return;
		}

		setIsLoading(false);
		setErr({ msg: "", field: null });
		toast.success("Check your email address", toastOptions);
		toast.success("Register successfully", toastOptions);
		navigate(AppRoutes.LOGIN);
	};

	return (
		<div className="register">
			<div className="register-form">
				<NavLink to={AppRoutes.HOME} className="logo">
					<img width={100} src={mini_logo} alt="logo" />
				</NavLink>
				<h2>Register to SongSphere</h2>
				<div className="question">
					<p>Already have an account?</p>
					<NavLink to={AppRoutes.LOGIN}>Login</NavLink>
				</div>
				<form onSubmit={handleRegister}>
					<div>
						<input
							ref={firstNameRef}
							type="text"
							placeholder="First Name"
							className={err.field === "firstName" ? "err" : ""}
						/>
					</div>
					<div>
						<input
							ref={lastNameRef}
							type="text"
							placeholder="Last Name"
							className={err.field === "lastName" ? "err" : ""}
						/>
					</div>
					<div>
						<input
							ref={emailRef}
							type="text"
							placeholder="Email"
							className={err.field === "email" ? "err" : ""}
						/>
					</div>
					<div className="register-password">
						<input
							ref={passwordRef}
							type={isVisible ? "text" : "password"}
							placeholder="Password"
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
					<button>Register</button>
				</form>
			</div>
			{isLoading && <Spinner />}
			<Footer />
		</div>
	);
};

export default Register;
