import { FC, FormEvent, useRef, useState } from "react";

import { NavLink } from "react-router-dom";
import AppRoutes from "../../router/Routes";

import { Footer } from "../../components";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

import mini_logo from "../../assets/mini-logo.png";
import { registerValidation } from "../../utils/validations/register.validation";
import { IAuth } from "../../ts/interfaces/IAuth";

import "./Register.less";

const Register: FC = () => {
	const [err, setErr] = useState<IAuth>({ msg: "", field: null });
	const [isVisible, setIsVisible] = useState<boolean>(false);

	const firstNameRef = useRef<HTMLInputElement | null>(null);
	const lastNameRef = useRef<HTMLInputElement | null>(null);
	const emailRef = useRef<HTMLInputElement | null>(null);
	const passwordRef = useRef<HTMLInputElement | null>(null);

	const handleRegister = (e: FormEvent<HTMLFormElement>) => {
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

		setErr({ msg: "", field: null });
		alert("Register successfully");
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
			<Footer />
		</div>
	);
};

export default Register;
