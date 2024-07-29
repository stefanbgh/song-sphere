import { createContext } from "react";

const SongContext = createContext({
	isActive: false,
	setIsActive: (arg: boolean) => {
		console.log(arg);
	},
});

export default SongContext;
