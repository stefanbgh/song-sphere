import { FC, ReactNode, useEffect } from "react";

import { sbAuth } from "../../constants/sbAuth.constant";
import { useNavigate } from "react-router-dom";
import AppRoutes from "../../router/Routes";

interface IProps {
	children: ReactNode;
}

const AuthLayout: FC<IProps> = ({ children }): JSX.Element | null => {
	const token = localStorage.getItem(sbAuth);
	const navigate = useNavigate();

	useEffect(() => {
		if (token) {
			navigate(AppRoutes.HOME);
		}
	}, [token]);

	if (!token) return <>{children}</>;

	return null;
};

export default AuthLayout;
