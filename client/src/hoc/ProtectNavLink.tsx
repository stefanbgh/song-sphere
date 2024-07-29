import { FC, MouseEvent } from "react";
import { NavLink, NavLinkProps } from "react-router-dom";

const ProtectedNavLink: FC<NavLinkProps> = ({ to, ...props }) => {
	const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
		const userId = localStorage.getItem("usr_id");

		if (!userId) {
			event.preventDefault();
			alert("You need to log in to access this page.");
		}
	};

	return <NavLink to={to} {...props} onClick={handleClick} />;
};

export default ProtectedNavLink;
