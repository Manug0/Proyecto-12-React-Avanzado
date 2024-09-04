import React from "react";
import { useFavorites } from "../../pages/Favorites/FavoritesProvider";
import "./Cart.css";
import { useCounter } from "../../contexts/CounterProvider";

const Cart = ({ computer }) => {
	const { favorites, addFavorite } = useFavorites();
	const { incrementCounter } = useCounter();

	const toggleLiked = (event) => {
		event.stopPropagation();
		if (favorites.some((fav) => fav.name === computer.name)) {
			incrementCounter(computer.name);
		} else {
			addFavorite(computer);
			incrementCounter(computer.name);
		}
	};

	return <i onClick={toggleLiked} className="ri-shopping-bag-4-fill"></i>;
};

export default Cart;
