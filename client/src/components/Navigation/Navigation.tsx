import { FC } from "react";

import { NavLink } from "react-router-dom";

import { navigationLinks } from "../../constants/navigationLinks.constant";
import { INavigationLink } from "../../ts/interfaces/INavigationLink";

import AppRoutes from "../../router/Routes";
import logo from "../../assets/logo.webp";

import "./Navigation.less";

const Navigation: FC = (): JSX.Element => {
	return (
		<section className="navigation">
			<nav>
				<div>
					<NavLink to={AppRoutes.HOME}>
						<img width={250} src={logo} alt="logo" />
					</NavLink>
				</div>
				<ul>
					{navigationLinks.map((navigation: INavigationLink) => {
						const { id, path, text } = navigation;

						return (
							<li key={id}>
								<NavLink
									className={({ isActive }) =>
										isActive ? "page active" : "page"
									}
									to={path}
								>
									{text}
								</NavLink>
							</li>
						);
					})}
				</ul>
			</nav>
		</section>
	);
};

export default Navigation;
