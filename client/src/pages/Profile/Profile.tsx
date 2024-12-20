import { FC, useState } from "react";

import { MdInfoOutline, MdInsertChartOutlined } from "react-icons/md";
import { IoMdOptions } from "react-icons/io";

import { useAppSelector } from "../../hooks/useAppSelector";
import { RootState } from "../../ts/types/RootState";

import { useYourActivityQuery } from "../../features/api/users.api";
import { sbAuth } from "../../constants/sbAuth.constant";
import { DeleteModal, UpdateModal } from "../../components";

import "./Profile.less";

const Profile: FC = (): JSX.Element | null => {
	const token = localStorage.getItem(sbAuth) as string;
	const { user: userData } = JSON.parse(token);

	const [isOpenDeleteModal, setIsOpenDeleteModal] = useState<boolean>(false);
	const [isOpenUpdateModal, setIsOpenUpdateModal] = useState<boolean>(false);

	const { user, yourActivity } = useAppSelector(
		(state: RootState) => state.users
	);

	useYourActivityQuery(userData.id);

	const handleOpenUpdateModal = () => setIsOpenUpdateModal(true);
	const handleOpenDeleteModal = () => setIsOpenDeleteModal(true);

	return (
		<div className="profile">
			<div className="profile-title">
				<h2>Profile</h2>
				<p>
					Manage your account and personalize your SongSphere
					experience. View your activity and preferences.
				</p>
			</div>
			<div className="info">
				<div className="activity-title">
					<MdInsertChartOutlined size={20} />
					<h3>Your Information:</h3>
				</div>
				<p>
					Full Name: <span>{user?.usr_fullname}</span>
				</p>
				<p>
					Email: <span>{user?.usr_email}</span>
				</p>
			</div>
			<div className="activity">
				<div className="activity-title">
					<MdInfoOutline size={20} />
					<h3>Your Activity:</h3>
				</div>
				<p>
					Favorite Songs: <span>{yourActivity?.favorites}</span>
				</p>
				<p>
					Songs in Playlist: <span>{yourActivity?.playlists}</span>
				</p>
			</div>
			<div className="options">
				<div className="options-title">
					<IoMdOptions size={20} />
					<h3>Options:</h3>
				</div>
				<div className="options-buttons">
					<button
						className="options-btn"
						onClick={handleOpenUpdateModal}
					>
						Edit profile
					</button>
					<button
						className="options-btn"
						onClick={handleOpenDeleteModal}
					>
						Delete profile
					</button>
				</div>
			</div>
			{isOpenDeleteModal && (
				<DeleteModal
					setIsOpen={setIsOpenDeleteModal}
					token={userData.id}
				/>
			)}
			{isOpenUpdateModal && (
				<UpdateModal setIsOpen={setIsOpenUpdateModal} />
			)}
		</div>
	);
};

export default Profile;
