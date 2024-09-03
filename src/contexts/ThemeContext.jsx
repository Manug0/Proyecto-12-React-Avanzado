import React, { createContext, useContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
	const [darkTheme, setDarkTheme] = useState(localStorage.getItem("theme") === "dark");

	useEffect(() => {
		const currentTheme = localStorage.getItem("theme");
		if (currentTheme === "dark") {
			document.body.classList.add("dark-theme");
			updateThemeClasses(true);
		} else {
			document.body.classList.remove("dark-theme");
			updateThemeClasses(false);
		}
	}, []);

	const updateThemeClasses = (isDarkTheme) => {
		const elements = document.querySelectorAll(
			"body, header, .request-info, h2, h3, h4, h5, p, i, a, label, input, form button, .PcCard, .info, footer, .slider, .rect, .favoritesPage, .home-hero, b, .home-cards-container, .buy-now-button, .home-picks, .product-popup-content"
		);
		elements.forEach((element) => {
			if (isDarkTheme) {
				element.classList.add("dark-theme");
			} else {
				element.classList.remove("dark-theme");
			}
		});
	};

	const toggleTheme = () => {
		const newTheme = !darkTheme;
		setDarkTheme(newTheme);
		localStorage.setItem("theme", newTheme ? "dark" : "light");
		document.body.classList.toggle("dark-theme", newTheme);
		updateThemeClasses(newTheme);
	};

	return (
		<ThemeContext.Provider value={{ darkTheme, toggleTheme, updateThemeClasses }}>
			{children}
		</ThemeContext.Provider>
	);
};
