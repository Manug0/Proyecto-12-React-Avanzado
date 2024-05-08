import React, { useState } from "react";
import "./Cart.css";
import { useFavorites } from "../pages/Favorites/FavoritesProvider";

const Cart = ({ computer }) => {
	const { addFavorite } = useFavorites();
	const [liked, setLiked] = useState(false);

	const toggleLiked = () => {
		setLiked(!liked);
		if (!liked) {
			addFavorite(computer);
		}
	};
	return <i onClick={toggleLiked} class="ri-shopping-bag-4-fill"></i>;
};

export default Cart;
