import { FC, MouseEvent } from "react";
import { NavLink, NavLinkProps } from "react-router-dom";
import { TOGGLE_POPUP } from "../features/slices/popup.slice";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { sbAuth } from "../constants/sbAuth.constant";

const ProtectedNavLink: FC<NavLinkProps> = ({ to, ...props }) => {
	const dispatch = useAppDispatch();

	const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
		const auth = localStorage.getItem(sbAuth);

		if (!auth) {
			event.preventDefault();

			dispatch(TOGGLE_POPUP(true));
		}
	};

	return <NavLink to={to} {...props} onClick={handleClick} />;
};

export default ProtectedNavLink;
