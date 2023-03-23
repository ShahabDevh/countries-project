export interface Theme {
	color: {
		background: string;
		element: string;
		text: string;
	};
}

export interface Variables {
	boxShadow: string;
	fontSize: {
		homePage: string;
		detailPage: string;
	};
	fontWeight: {
		light: number;
		regular: number;
		bold: number;
	};
	breakpoints: {
		mobile: string;
		desktop: string;
	};
}

export type theme = "light" | "dark";
