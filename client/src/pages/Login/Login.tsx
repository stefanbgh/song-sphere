import { FC } from "react";

import { NavLink } from "react-router-dom";
import AppRoutes from "../../router/Routes";

import { FcGoogle } from "react-icons/fc";

import mini_logo from "../../assets/mini-logo.png";
import "./Login.less";
import { Footer } from "../../components";

const Login: FC = () => {
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
				<button className="google">
					<FcGoogle size={25} />
					<p>Login with Google</p>
				</button>
				<div className="hr">
					<hr />
					<p>or</p>
					<hr />
				</div>
				<form action="">
					<div>
						<input type="text" placeholder="Enter your email" />
					</div>
					<div>
						<input type="text" placeholder="Enter your password" />
					</div>
					<div>
						<NavLink to={AppRoutes.FORGOT_PASSWORD}>
							Forgot Password?
						</NavLink>
						<button>Login</button>
					</div>
				</form>
			</div>
			<Footer />
		</div>
	);
};

export default Login;
