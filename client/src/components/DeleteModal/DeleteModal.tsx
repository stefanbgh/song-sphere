import { Dispatch, FC, SetStateAction } from "react";

import { IoClose } from "react-icons/io5";
import mini_logo from "../../assets/mini-logo.webp";

import sb from "../../supabase";
import toast from "react-hot-toast";
import { toastOptions } from "../../options/toast.options";
import { useNavigate } from "react-router-dom";
import AppRoutes from "../../router/Routes";
import { sbAuth } from "../../constants/sbAuth.constant";
import { REMOVE_USER_INFO } from "../../features/slices/users.slice";
import { useAppDispatch } from "../../hooks/useAppDispatch";

import "./DeleteModal.less";

interface IProps {
	setIsOpen: Dispatch<SetStateAction<boolean>>;
	token: string;
}

const DeleteModal: FC<IProps> = ({ setIsOpen, token }): JSX.Element => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	const handleClose = () => setIsOpen(false);

	const handleDelete = async (token: string) => {
		const { error } = await sb.auth.admin.deleteUser(token);

		setIsOpen(false);

		if (error) {
			toast.error(error.message, toastOptions);

			return;
		}

		localStorage.removeItem(sbAuth);
		toast.success("You successfully deleted your profile", toastOptions);
		navigate(AppRoutes.LOGIN);
		dispatch(REMOVE_USER_INFO());
	};

	return (
		<>
			<div className="overlay"></div>
			<div className="modal">
				<div className="modal__x">
					<IoClose className="modal__x-icon" onClick={handleClose} />
				</div>
				<div className="modal-logo">
					<img src={mini_logo} alt="mini-logo" width={100} />
				</div>
				<div className="modal-msg">
					<p>Are you sure you want to delete your profile?</p>
				</div>
				<div className="modal__btn">
					<button className="modal__btn-close" onClick={handleClose}>
						No
					</button>
					<button
						className="modal__btn-login"
						onClick={() => handleDelete(token)}
					>
						Yes
					</button>
				</div>
			</div>
		</>
	);
};

export default DeleteModal;
