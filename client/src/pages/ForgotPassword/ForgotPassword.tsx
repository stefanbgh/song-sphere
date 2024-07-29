import { FC } from "react";
import { NavLink } from "react-router-dom";
import AppRoutes from "../../router/Routes";

import mini_logo from "../../assets/mini-logo.png";
import "./ForgotPassword.less";
import { Footer } from "../../components";

const ForgotPassword: FC = () => {
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
				<form action="">
					<div>
						<input type="text" placeholder="Enter your email" />
					</div>
					<button>Send instructions</button>
				</form>
			</div>
			<Footer />
		</div>
	);
};

export default ForgotPassword;
