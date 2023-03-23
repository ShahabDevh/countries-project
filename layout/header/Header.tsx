import { useTheme } from "context/themeContext";
import { BsMoon } from "react-icons/bs";
import { H1 } from "styles/cssHelpers";
import { Button, HeaderBox } from "./Header.styles";

function Header() {
	const { dispatch } = useTheme();

	return (
		<HeaderBox>
			<H1>Where in the world ?</H1>

			<Button onClick={() => dispatch({ type: "toggle-theme" })}>
				<BsMoon />
				Dark Mode
			</Button>
		</HeaderBox>
	);
}

export default Header;
