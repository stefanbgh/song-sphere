import { FC } from "react";

import "./SubTitle.less";

interface IProps {
	subTitle: string;
}

const SubTitle: FC<IProps> = ({ subTitle }): JSX.Element => {
	return <h3 className="sub-title">{subTitle}</h3>;
};

export default SubTitle;
