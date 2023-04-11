import { createContext, useContext, useReducer } from "react";

type Action = { type: "toggle-theme" };
type Dispatch = (action: Action) => void;
type State = { theme: "light" | "dark" };
type ThemeProviderProps = { children: React.ReactNode };

const ThemeContext =
	createContext<{ state: State; dispatch: Dispatch } | undefined>(undefined);

const themeReducer = (state: State, action: Action): State => {
	switch (action.type) {
		case "toggle-theme":
			return { theme: state.theme === "light" ? "dark" : "light" };

		default: {
			throw new Error(`Unhandled action type: ${action.type}`);
		}
	}
};

function ThemeContextProvider({ children }: ThemeProviderProps) {
	const [state, dispatch] = useReducer(themeReducer, { theme: "dark" });

	return (
		<ThemeContext.Provider value={{ state, dispatch }}>
			{children}
		</ThemeContext.Provider>
	);
}

function useTheme() {
	const context = useContext(ThemeContext);

	if (context === undefined) {
		throw new Error("useTheme must be used within a ThemeProvider");
	}

	return context;
}

export { ThemeContextProvider, useTheme };
