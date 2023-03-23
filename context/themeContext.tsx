import { createContext, useContext, useReducer } from "react";

type Action = { type: "toggle-theme" };
// eslint-disable-next-line no-unused-vars
type Dispatch = (action: Action) => void;
type State = { theme: "light" | "dark" };
type ThemeProviderProps = { children: React.ReactNode };

const ThemeContext =
	createContext<{ state: State; dispatch: Dispatch } | undefined>(undefined);

const themeReducer = (state: State, action: Action) => {
	switch (action.type) {
		case "toggle-theme":
			return { theme: state.theme === "light" ? "dark" : "light" };

		default: {
			throw new Error(`Unhandled action type: ${action.type}`);
		}
	}
};

function ThemeContextProvider({ children }: ThemeProviderProps) {
	const [state, dispatch] = useReducer(themeReducer, { theme: "light" });
	const value = { state, dispatch };

	return (
		<ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
	);
}

function useTheme() {
	const context = useContext(ThemeContext);
	if (context === undefined) {
		throw new Error("useCount must be used within a CountProvider");
	}
	return context;
}

export { ThemeContextProvider, useTheme };
