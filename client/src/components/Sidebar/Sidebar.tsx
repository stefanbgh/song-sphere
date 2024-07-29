import { FC } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { IoHomeOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import ProtectedNavLink from "../../hoc/ProtectNavLink";
import AppRoutes from "../../router/Routes";

import logo from "../../assets/logo.png";
import mini_logo from "../../assets/mini-logo.png";

import "./Sidebar.less";

const Sidebar: FC = () => {
	return (
		<aside>
			<div>
				<img width={250} src={logo} alt="logo" />
			</div>
			<ul>
				<li>
					<IoHomeOutline size={20} />
					<NavLink to={AppRoutes.HOME}>Home</NavLink>
				</li>
				<li>
					<AiOutlineUser size={20} />
					<ProtectedNavLink to={AppRoutes.PROFILE}>
						Profile
					</ProtectedNavLink>
				</li>
			</ul>
			<div className="library">
				<div className="favorites">
					<ProtectedNavLink to={AppRoutes.FAVORITES}>
						Your Favorites
					</ProtectedNavLink>
					<p>
						Your favorite songs will appear here. Add songs to this
						list by marking them as favorites to easily find and
						enjoy them later.
					</p>
				</div>
				<div className="playlist">
					<ProtectedNavLink to={AppRoutes.PLAYLIST}>
						Your Playlist
					</ProtectedNavLink>
					<p>
						Create and manage your personalized playlist here. Add
						songs you love to this list for easy access and a
						tailored listening experience.
					</p>
				</div>
			</div>
			<div className="links">
				<NavLink to={AppRoutes.ABOUT}>
					<p>About Us</p>
				</NavLink>
				<NavLink to={AppRoutes.CONTACT}>
					<p>Contact</p>
				</NavLink>
				<NavLink to={AppRoutes.FAQ}>
					<p>FAQ</p>
				</NavLink>
				<NavLink to={AppRoutes.TERMS_OF_USE}>
					<p>Terms of Use</p>
				</NavLink>
				<NavLink to={AppRoutes.PRIVACY_POLICE}>
					<p>Privacy Police</p>
				</NavLink>
				<div className="mini_logo">
					<img width={25} src={mini_logo} alt="mini_logo" />
				</div>
			</div>
		</aside>
	);
};

export default Sidebar;
