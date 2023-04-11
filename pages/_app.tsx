import { darkTheme, lightTheme, variables } from "constants/theme";
import { ThemeContextProvider, useTheme } from "context/themeContext";
import Header from "layout/header/Header";
import type { AppProps } from "next/app";
import { Nunito_Sans } from "next/font/google";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "styles/global.styles";

const nunitoSans = Nunito_Sans({
	weight: ["300", "600", "800"],
	subsets: ["latin"],
});

const queryClient = new QueryClient();

function Layout({ children }: any) {
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
		<>
			<style jsx global>{`
				html {
					font-family: ${nunitoSans.style.fontFamily};
				}
			`}</style>

			<QueryClientProvider client={queryClient}>
				<ThemeContextProvider>
					<Layout>
						<Component {...pageProps} />
					</Layout>
				</ThemeContextProvider>

				<ReactQueryDevtools />
			</QueryClientProvider>
		</>
	);
}

export default MyApp;
