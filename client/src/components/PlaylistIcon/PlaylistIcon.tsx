import { FC, useEffect } from "react";

import { CiBookmark } from "react-icons/ci";
import {
	useAddPlaylistMutation,
	useDeletePlaylistMutation,
	useGetPlaylistQuery,
} from "../../features/api/playlists.api";
import { useAppSelector } from "../../hooks/useAppSelector";
import { RootState } from "../../ts/types/RootState";
import { sbAuth } from "../../constants/sbAuth.constant";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { CHECK_PLAYLIST_SONG } from "../../features/slices/playlists.slice";

interface IProps {
	id: string;
}

const PlaylistIcon: FC<IProps> = ({ id }): JSX.Element => {
	const token = localStorage.getItem(sbAuth) as string;
	const { user: userData } = JSON.parse(token);

	useGetPlaylistQuery(userData.id);

	const { playlist, exists } = useAppSelector(
		(state: RootState) => state.playlists
	);

	const dispatch = useAppDispatch();
	const [addPlaylist] = useAddPlaylistMutation();
	const [deletePlaylist] = useDeletePlaylistMutation();

	useEffect(() => {
		if (playlist) {
			const sng_id = Number(id);

			dispatch(CHECK_PLAYLIST_SONG(sng_id));
		}

		// eslint-disable-next-line
	}, [playlist]);

	const handleToggle = (id: string, usr_id: string) => {
		const sng_id = Number(id);

		if (exists) {
			deletePlaylist({ sng_id, usr_id });

			return;
		}

		addPlaylist({ sng_id, usr_id });
	};

	return (
		<CiBookmark
			size={24}
			className={exists ? "icon active" : "icon"}
			onClick={() => handleToggle(id, userData.id)}
		/>
	);
};

export default PlaylistIcon;
