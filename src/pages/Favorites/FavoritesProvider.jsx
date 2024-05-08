import React, { createContext, useState, useEffect, useContext } from "react";

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
	const [favorites, setFavorites] = useState([]);

	useEffect(() => {
		const storedFavorites = localStorage.getItem("favorites");
		if (storedFavorites) {
			setFavorites(JSON.parse(storedFavorites));
		}
	}, []);

	useEffect(() => {
		localStorage.setItem("favorites", JSON.stringify(favorites));
	}, [favorites]);

	const addFavorite = (favorite) => {
		setFavorites((prevFavorites) => [...prevFavorites, favorite]);
	};

	const removeFavorite = (favorite) => {
		setFavorites((prevFavorites) => prevFavorites.filter((fav) => fav !== favorite));
	};

	return (
		<FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
			{children}
		</FavoritesContext.Provider>
	);
};

export const useFavorites = () => useContext(FavoritesContext);
