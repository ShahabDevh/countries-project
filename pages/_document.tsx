import Document, { DocumentContext } from "next/document";
import { ServerStyleSheet } from "styled-components";

// NOTE: Read about it why we need to rehydrate styled component
// url: https://dev.to/ramonak/nextjs-dashboard-layout-with-typescript-and-styled-components-3ld6
export default class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const sheet = new ServerStyleSheet();
		const originalRenderPage = ctx.renderPage;

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: (App) => (props) =>
						sheet.collectStyles(<App {...props} />),
				});

			const initialProps = await Document.getInitialProps(ctx);
			return {
				...initialProps,
				styles: (
					<>
						{initialProps.styles}
						{sheet.getStyleElement()}
					</>
				),
			};
		} finally {
			sheet.seal();
		}
	}
}
