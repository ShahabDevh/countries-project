import { Theme, Variables } from "interfaces/theme";

declare module "styled-components" {
	export interface DefaultTheme extends Theme, Variables {}
}
