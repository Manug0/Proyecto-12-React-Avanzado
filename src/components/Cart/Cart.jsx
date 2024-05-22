import React from "react";
import { useFavorites } from "../../pages/Favorites/FavoritesProvider";
import { useCounter } from "../Counter/CounterProvider";
import "./Cart.css";

const Cart = ({ computer }) => {
	const { favorites, addFavorite } = useFavorites();
	const { incrementCounter } = useCounter();

	const toggleLiked = () => {
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
