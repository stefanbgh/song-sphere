import AppRoutes from "../router/Routes";

import { INavigationLink } from "../ts/interfaces/INavigationLink";

export const navigationLinks: INavigationLink[] = [
	{
		id: 1,
		path: AppRoutes.ABOUT,
		text: "About Us",
	},
	{
		id: 2,
		path: AppRoutes.CONTACT,
		text: "Contact",
	},
	{
		id: 3,
		path: AppRoutes.FAQ,
		text: "FAQ",
	},
	{
		id: 4,
		path: AppRoutes.TERMS_OF_USE,
		text: "Terms of Use",
	},
	{
		id: 5,
		path: AppRoutes.PRIVACY_POLICE,
		text: "Privacy Police",
	},
];
