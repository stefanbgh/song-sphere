import { FC } from "react";

import { useAppDispatch } from "../../hooks/useAppDispatch";
import { TOGGLE_POPUP } from "../../features/slices/popup.slice";

import mini_logo from "../../assets/mini-logo.webp";

import { useNavigate } from "react-router-dom";
import AppRoutes from "../../router/Routes";
import { IoClose } from "react-icons/io5";

import "./PopUp.less";

const PopUp: FC = (): JSX.Element => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const handleClose = () => {
		dispatch(TOGGLE_POPUP(false));
	};

	const handleLogin = () => {
		dispatch(TOGGLE_POPUP(false));
		navigate(AppRoutes.LOGIN);
	};

	return (
		<>
			<div className="overlay"></div>
			<div className="popup">
				<div className="popup__x">
					<IoClose className="popup__x-icon" onClick={handleClose} />
				</div>
				<div className="popup-logo">
					<img src={mini_logo} alt="mini-logo" width={100} />
				</div>
				<div className="popup-msg">
					<p>
						Please log in to access the content of our application.
					</p>
					<p>Thank you for your patience!</p>
				</div>
				<div className="popup__btn">
					<button className="popup__btn-close" onClick={handleClose}>
						Close
					</button>
					<button className="popup__btn-login" onClick={handleLogin}>
						Login
					</button>
				</div>
			</div>
		</>
	);
};

export default PopUp;
