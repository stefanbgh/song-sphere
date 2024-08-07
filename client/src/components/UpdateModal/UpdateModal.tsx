import { Dispatch, FC, SetStateAction, useState } from "react";

import { IoClose } from "react-icons/io5";
import mini_logo from "../../assets/mini-logo.webp";
import { useAppSelector } from "../../hooks/useAppSelector";
import { RootState } from "../../ts/types/RootState";
import sb from "../../supabase";

import toast from "react-hot-toast";
import { toastOptions } from "../../options/toast.options";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { UPDATE_USER_INFO } from "../../features/slices/users.slice";

import "./UpdateModal.less";

interface IProps {
	setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const UpdateModal: FC<IProps> = ({ setIsOpen }): JSX.Element => {
	const { user } = useAppSelector((state: RootState) => state.users);
	const dispatch = useAppDispatch();

	const [fullName, setFullName] = useState<string>(user?.usr_fullname || "");
	const [email, setEmail] = useState<string>(user?.usr_email || "");

	const handleClose = () => {
		setIsOpen(false);
	};
	const handleUpdate = async () => {
		const { error } = await sb.auth.updateUser({
			email: "newemail@gmail.com",
			data: {
				display_name: "Super Legends",
			},
		});

		if (error) {
			setIsOpen(false);
			toast.error(error.message, toastOptions);

			return;
		}

		setIsOpen(false);
		dispatch(
			UPDATE_USER_INFO({
				usr_fullname: fullName,
				usr_email: email,
			})
		);
		toast.success("You successfully updated your profile", toastOptions);
	};

	return (
		<>
			<div className="overlay"></div>
			<div className="update-modal">
				<div className="update-modal__x">
					<IoClose className="modal__x-icon" onClick={handleClose} />
				</div>
				<div className="update-modal-logo">
					<img src={mini_logo} alt="mini-logo" width={100} />
				</div>
				<div className="update-modal-msg">
					<p>Update your Profile Info</p>
				</div>
				<form className="update-form">
					<input
						value={fullName}
						onChange={(e) => setFullName(e.target.value)}
						type="text"
						placeholder="Your Full Name"
					/>
					<input
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						type="text"
						placeholder="Your email"
					/>
				</form>
				<div className="update-modal__btn">
					<button className="modal__btn-close" onClick={handleClose}>
						Cancel
					</button>
					<button
						className="update-modal__btn-login"
						onClick={() => handleUpdate()}
					>
						Update
					</button>
				</div>
			</div>
		</>
	);
};

export default UpdateModal;
