import React, { useState } from "react";
import "./Heart.css";
import { useFavorites } from "../pages/Favorites/FavoritesProvider";

const Heart = ({ computer }) => {
	const { addFavorite } = useFavorites();
	const [liked, setLiked] = useState(false);

	const toggleLiked = () => {
		setLiked(!liked);
		if (!liked) {
			addFavorite(computer);
		}
	};

	return <button className={`heart ${liked ? "liked" : ""}`} onClick={toggleLiked}></button>;
};

export default Heart;
