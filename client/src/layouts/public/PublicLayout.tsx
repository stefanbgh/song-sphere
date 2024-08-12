import { FC, ReactNode, useEffect } from "react";

import { RootState } from "../../ts/types/RootState";
import { useAppSelector } from "../../hooks/useAppSelector";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { STOP_SONG } from "../../features/slices/songs.slice";

interface IProps {
	children: ReactNode;
}

const PublicLayout: FC<IProps> = ({ children }): JSX.Element | null => {
	const { activeSong } = useAppSelector((state: RootState) => state.songs);

	const dispatch = useAppDispatch();

	useEffect(() => {
		if (activeSong) {
			dispatch(STOP_SONG());
		}
	}, []);

	return <>{children}</>;
};

export default PublicLayout;
