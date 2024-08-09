import { FC, useEffect } from "react";

import { CiHeart } from "react-icons/ci";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import { RootState } from "../../ts/types/RootState";
import { CHECK_FAVORITE_SONG } from "../../features/slices/favorites.slice";
import { sbAuth } from "../../constants/sbAuth.constant";
import {
	useAddFavoriteMutation,
	useDeleteFavoriteMutation,
	useGetFavoritesQuery,
} from "../../features/api/favorites.api";

interface IProps {
	id: string;
}

const FavoriteIcon: FC<IProps> = ({ id }): JSX.Element => {
	const token = localStorage.getItem(sbAuth) as string;
	const { user: userData } = JSON.parse(token);

	useGetFavoritesQuery(userData.id);

	const { favorites, exists } = useAppSelector(
		(state: RootState) => state.favorites
	);

	const dispatch = useAppDispatch();
	const [addFavorite] = useAddFavoriteMutation();
	const [deleteFavorite] = useDeleteFavoriteMutation();

	useEffect(() => {
		if (favorites) {
			const sng_id = Number(id);

			dispatch(CHECK_FAVORITE_SONG(sng_id));
		}

		// eslint-disable-next-line
	}, [favorites]);

	const handleToggle = (id: string, usr_id: string) => {
		const sng_id = Number(id);

		if (exists) {
			deleteFavorite({ sng_id, usr_id });

			return;
		}

		addFavorite({ sng_id, usr_id });
	};

	return (
		<CiHeart
			size={24}
			className={exists ? "icon active" : "icon"}
			onClick={() => handleToggle(id, userData.id)}
		/>
	);
};

export default FavoriteIcon;
