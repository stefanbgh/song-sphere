import { FC } from "react";
import { NavLink } from "react-router-dom";
import AppRoutes from "../../router/Routes";

import mini_logo from "../../assets/mini-logo.png";

import "./ResetPassword.less";
import { Footer } from "../../components";

const ResetPassword: FC = () => {
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
				<form action="">
					<div>
						<input type="text" placeholder="New password" />
					</div>
					<div>
						<input type="text" placeholder="Confirm new password" />
					</div>
					<button>Reset password</button>
				</form>
			</div>
			<Footer />
		</div>
	);
};

export default ResetPassword;
