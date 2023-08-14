import { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
	// find the theme value from the local storage if it exists.
	// If it doesn't exist, set it to light.
	let local_theme = localStorage.getItem("my_theme");
	console.log("loading theme from localstoreage: ", local_theme);
	if (local_theme === null) {
		localStorage.setItem("my_theme", "light");
		local_theme = "light";
	}

	const [theme, setContextTheme] = useState(local_theme);

	const setTheme = (theme) => {
		console.log("from the inside, ", theme);
		if (theme === "dark") {
			setContextTheme("dark");
			localStorage.setItem("my_theme", "dark");
		} else {
			setContextTheme("light");
			localStorage.setItem("my_theme", "light");
		}
	};

	return (
		<ThemeContext.Provider value={{ theme, setTheme: setTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

export default ThemeContextProvider;
