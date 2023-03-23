import { darkTheme, lightTheme, variables } from "constants/theme";
import { ThemeContextProvider, useTheme } from "context/themeContext";
import Header from "layout/header/Header";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "styles/global.styles";

function App({ children }: any) {
	const { state } = useTheme();
	const theme = state.theme === "light" ? lightTheme : darkTheme;

	return (
		<ThemeProvider theme={{ ...theme, ...variables }}>
			<GlobalStyle />
			<Header />
			{children}
		</ThemeProvider>
	);
}

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ThemeContextProvider>
			<App>
				<Component {...pageProps} />
			</App>
		</ThemeContextProvider>
	);
}

export default MyApp;
