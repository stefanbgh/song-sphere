import { FC, useEffect, useState } from "react";

import { NavLink, useNavigate } from "react-router-dom";
import AppRoutes from "../../router/Routes";
import { sbAuth } from "../../constants/sbAuth.constant";

import { useAppDispatch } from "../../hooks/useAppDispatch";
import {
	CREATE_USER_INFO,
	REMOVE_USER_INFO,
} from "../../features/slices/users.slice";
import { useAppSelector } from "../../hooks/useAppSelector";
import { RootState } from "../../ts/types/RootState";

import { IoLogOutOutline } from "react-icons/io5";

import sb from "../../supabase";
import toast from "react-hot-toast";
import { toastOptions } from "../../options/toast.options";

import "./Navbar.less";
import Spinner from "../Spinner/Spinner";

const Navbar: FC = (): JSX.Element => {
	const dispatch = useAppDispatch();
	const [token, setToken] = useState<string | null>(
		localStorage.getItem(sbAuth)
	);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const navigate = useNavigate();

	const { user } = useAppSelector((state: RootState) => state.users);

	useEffect(() => {
		const checkToken = () => {
			const storedToken = localStorage.getItem(sbAuth);

			setToken(storedToken);
			setIsLoading(false);
		};

		const timer = setTimeout(() => {
			checkToken();
		}, 1000);

		return () => {
			setIsLoading(true);
			clearTimeout(timer);
		};
	}, []);

	useEffect(() => {
		if (token) {
			const { user } = JSON.parse(token);

			if (user.user_metadata.display_name) {
				const { display_name, email: usr_email } = user.user_metadata;

				dispatch(
					CREATE_USER_INFO({
						usr_id: user.id,
						usr_fullname: display_name,
						usr_email,
						usr_password: "",
					})
				);

				return;
			}

			const { full_name, email: usr_email } = user.user_metadata;

			dispatch(
				CREATE_USER_INFO({
					usr_id: user.id,
					usr_fullname: full_name,
					usr_email,
					usr_password: "",
				})
			);
		}
		// eslint-disable-next-line
	}, [token]);

	const handleLogout = async () => {
		const { error } = await sb.auth.signOut();

		if (error) {
			toast.error(error.message, toastOptions);

			return;
		}

		navigate(AppRoutes.LOGIN);
		toast.success("Logout successfully", toastOptions);
		dispatch(REMOVE_USER_INFO());
	};

	return (
		<>
			<nav>
				<div>
					{user ? (
						<div className="info">
							<p>{user.usr_email}</p>
							<IoLogOutOutline
								size={24}
								className="logout"
								onClick={handleLogout}
							/>
						</div>
					) : (
						<ul>
							<NavLink to={AppRoutes.LOGIN}>
								<li>Login</li>
							</NavLink>
							<NavLink to={AppRoutes.REGISTER}>
								<li className="register-btn">Register</li>
							</NavLink>
						</ul>
					)}
				</div>
			</nav>
			{isLoading && <Spinner />}
		</>
	);
};

export default Navbar;
