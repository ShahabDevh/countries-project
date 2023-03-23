import { Theme, Variables } from "interfaces/theme";

export const lightTheme: Theme = {
	color: {
		background: "#FAFAFA",
		element: "#FFFFFF",
		text: "#111517",
	},
};

export const darkTheme: Theme = {
	color: {
		background: "#202D36",
		element: "#2B3B45",
		text: "#FFFFFF",
	},
};

export const variables: Variables = {
	boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
	fontSize: {
		homePage: "1.4rem",
		detailPage: "1.6rem",
	},
	fontWeight: {
		light: 300,
		regular: 600,
		bold: 800,
	},
	breakpoints: {
		mobile: "375px",
		desktop: "1440px",
	},
};
