import { Component, ErrorInfo, ReactNode } from "react";

import "./ErrorBoundary.less";

interface Props {
	children?: ReactNode;
}

interface State {
	hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
	public state: State = {
		hasError: false,
	};

	/* eslint-disable @typescript-eslint/no-unused-vars */
	public static getDerivedStateFromError(_: Error): State {
		return { hasError: true };
	}

	public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
		console.error("Uncaught error:", error, errorInfo);
	}

	public render() {
		if (this.state.hasError) {
			return (
				<div className="error__boundary">
					<h1>Oops.. something went wrong.</h1>
					<h2>Please, try again later.</h2>
				</div>
			);
		}

		return this.props.children;
	}
}

export default ErrorBoundary;
