import { FC, ReactNode } from "react";

import { Footer, Navigation } from "../components";

import "./Container.less";

interface IProps {
	children: ReactNode;
	cn: string;
}

const Container: FC<IProps> = ({ children, cn }): JSX.Element => {
	return (
		<>
			<Navigation />
			<div className="container">
				<section className={cn}>{children}</section>
				<Footer />
			</div>
		</>
	);
};

export default Container;
