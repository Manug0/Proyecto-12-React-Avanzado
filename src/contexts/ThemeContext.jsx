import React, { createContext, useContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
	const [darkTheme, setDarkTheme] = useState(localStorage.getItem("theme") === "dark");

	useEffect(() => {
		const currentTheme = localStorage.getItem("theme");
		if (currentTheme === "dark") {
			document.body.classList.add("dark-theme");
		} else {
			document.body.classList.remove("dark-theme");
		}
	}, [darkTheme]);

	const toggleTheme = () => {
		const newTheme = !darkTheme;
		setDarkTheme(newTheme);
		localStorage.setItem("theme", newTheme ? "dark" : "light");

		document.body.classList.toggle("dark-theme", newTheme);
	};

	return (
		<ThemeContext.Provider value={{ darkTheme, toggleTheme }}>{children}</ThemeContext.Provider>
	);
};
