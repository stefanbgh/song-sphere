import { FC } from "react";

import "./Title.less";

interface IProps {
	title: string;
}

const Title: FC<IProps> = ({ title }): JSX.Element => {
	return <h1 className="title">{title}</h1>;
};

export default Title;
