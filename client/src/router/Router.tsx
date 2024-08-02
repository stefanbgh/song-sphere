import React from "react";

import {
	BrowserRouter,
	Routes as BrowserRoutes,
	Route,
} from "react-router-dom";

import {
	About,
	Artist,
	Artists,
	Contact,
	Faq,
	Favorites,
	ForgotPassword,
	Home,
	Login,
	NotFound,
	Playlist,
	OurPlaylist,
	PrivacyPolice,
	Profile,
	Register,
	ResetPassword,
	Song,
	Songs,
	TermsOfUse,
} from "../pages";

import Layout from "../layout/Layout";
import AppRoutes from "./Routes";

import { Toaster } from "react-hot-toast";

const Router: React.FC = (): JSX.Element => {
	return (
		<BrowserRouter>
			<Toaster />
			<BrowserRoutes>
				{/* App */}
				<Route
					path={AppRoutes.HOME}
					element={
						<Layout>
							<Home />
						</Layout>
					}
				/>
				<Route
					path={AppRoutes.FAVORITES}
					element={
						<Layout>
							<Favorites />
						</Layout>
					}
				/>
				<Route
					path={AppRoutes.PLAYLIST}
					element={
						<Layout>
							<Playlist />
						</Layout>
					}
				/>
				<Route
					path={AppRoutes.ARTISTS}
					element={
						<Layout>
							<Artists />
						</Layout>
					}
				/>
				<Route
					path={`${AppRoutes.ARTISTS}/:id`}
					element={
						<Layout>
							<Artist />
						</Layout>
					}
				/>
				<Route
					path={AppRoutes.SONGS}
					element={
						<Layout>
							<Songs />
						</Layout>
					}
				/>
				<Route
					path={`${AppRoutes.SONGS}/:id`}
					element={
						<Layout>
							<Song />
						</Layout>
					}
				/>
				<Route
					path={AppRoutes.OUR_PLAYLIST}
					element={
						<Layout>
							<OurPlaylist />
						</Layout>
					}
				/>
				<Route
					path={AppRoutes.PROFILE}
					element={
						<Layout>
							<Profile />
						</Layout>
					}
				/>

				{/* Info */}
				<Route path={AppRoutes.ABOUT} element={<About />} />
				<Route path={AppRoutes.CONTACT} element={<Contact />} />
				<Route path={AppRoutes.FAQ} element={<Faq />} />
				<Route
					path={AppRoutes.PRIVACY_POLICE}
					element={<PrivacyPolice />}
				/>
				<Route path={AppRoutes.TERMS_OF_USE} element={<TermsOfUse />} />

				{/* Auth */}
				<Route path={AppRoutes.LOGIN} element={<Login />} />
				<Route path={AppRoutes.REGISTER} element={<Register />} />
				<Route
					path={AppRoutes.FORGOT_PASSWORD}
					element={<ForgotPassword />}
				/>
				<Route
					path={AppRoutes.RESET_PASSWORD}
					element={<ResetPassword />}
				/>
				<Route path={AppRoutes.NOT_FOUND} element={<NotFound />} />
			</BrowserRoutes>
		</BrowserRouter>
	);
};

export default Router;
