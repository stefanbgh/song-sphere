import { FC, ReactNode } from "react";

import "./List.less";

interface IProps {
	children: ReactNode;
}

const List: FC<IProps> = ({ children }): JSX.Element => {
	return <div className="list">{children}</div>;
};

export default List;
