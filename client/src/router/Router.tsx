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

import { AuthLayout, PrivateLayout, PublicLayout } from "../layouts";
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
						<PrivateLayout>
							<Home />
						</PrivateLayout>
					}
				/>
				<Route
					path={AppRoutes.FAVORITES}
					element={
						<PrivateLayout>
							<Favorites />
						</PrivateLayout>
					}
				/>
				<Route
					path={AppRoutes.PLAYLIST}
					element={
						<PrivateLayout>
							<Playlist />
						</PrivateLayout>
					}
				/>
				<Route
					path={AppRoutes.ARTISTS}
					element={
						<PrivateLayout>
							<Artists />
						</PrivateLayout>
					}
				/>
				<Route
					path={`${AppRoutes.ARTISTS}/:id`}
					element={
						<PrivateLayout>
							<Artist />
						</PrivateLayout>
					}
				/>
				<Route
					path={AppRoutes.SONGS}
					element={
						<PrivateLayout>
							<Songs />
						</PrivateLayout>
					}
				/>
				<Route
					path={`${AppRoutes.SONGS}/:id`}
					element={
						<PrivateLayout>
							<Song />
						</PrivateLayout>
					}
				/>
				<Route
					path={AppRoutes.OUR_PLAYLIST}
					element={
						<PrivateLayout>
							<OurPlaylist />
						</PrivateLayout>
					}
				/>
				<Route
					path={AppRoutes.PROFILE}
					element={
						<PrivateLayout>
							<Profile />
						</PrivateLayout>
					}
				/>

				{/* Info */}
				<Route
					path={AppRoutes.ABOUT}
					element={
						<PublicLayout>
							<About />
						</PublicLayout>
					}
				/>
				<Route
					path={AppRoutes.CONTACT}
					element={
						<PublicLayout>
							<Contact />
						</PublicLayout>
					}
				/>
				<Route
					path={AppRoutes.FAQ}
					element={
						<PublicLayout>
							<Faq />
						</PublicLayout>
					}
				/>
				<Route
					path={AppRoutes.PRIVACY_POLICE}
					element={
						<PublicLayout>
							<PrivacyPolice />
						</PublicLayout>
					}
				/>
				<Route
					path={AppRoutes.TERMS_OF_USE}
					element={
						<PublicLayout>
							<TermsOfUse />
						</PublicLayout>
					}
				/>

				{/* Auth */}
				<Route
					path={AppRoutes.LOGIN}
					element={
						<AuthLayout>
							<Login />
						</AuthLayout>
					}
				/>
				<Route
					path={AppRoutes.REGISTER}
					element={
						<AuthLayout>
							<Register />
						</AuthLayout>
					}
				/>
				<Route
					path={AppRoutes.FORGOT_PASSWORD}
					element={
						<AuthLayout>
							<ForgotPassword />
						</AuthLayout>
					}
				/>
				<Route
					path={AppRoutes.RESET_PASSWORD}
					element={
						<AuthLayout>
							<ResetPassword />
						</AuthLayout>
					}
				/>
				<Route path={AppRoutes.NOT_FOUND} element={<NotFound />} />
			</BrowserRoutes>
		</BrowserRouter>
	);
};

export default Router;
