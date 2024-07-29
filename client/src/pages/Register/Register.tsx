import { FC } from "react";

import { NavLink } from "react-router-dom";
import AppRoutes from "../../router/Routes";

import mini_logo from "../../assets/mini-logo.png";
import "./Register.less";
import { Footer } from "../../components";

const Register: FC = () => {
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
				<form action="">
					<div>
						<input type="text" placeholder="First Name" />
					</div>
					<div>
						<input type="text" placeholder="Last Name" />
					</div>
					<div>
						<input type="text" placeholder="Email" />
					</div>
					<div>
						<input type="text" placeholder="Password" />
					</div>
					<button>Register</button>
				</form>
			</div>
			<Footer />
		</div>
	);
};

export default Register;
