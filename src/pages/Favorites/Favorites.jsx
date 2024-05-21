import React, { forwardRef, useState } from "react";
import "./Favorites.css";
import { useFavorites } from "./FavoritesProvider";
import DeleteFav from "../../components/DeleteCart/DeleteFav";

const Favorites = forwardRef((props, ref) => {
	const { favorites, removeFavorite } = useFavorites();
	const [deleteFav, setDeleteFav] = useState(false);
	const [buttons, setButtons] = useState({});

	const handleDelete = (computer) => {
		setDeleteFav(!deleteFav);
		if (!deleteFav) {
			removeFavorite(computer);
		}
	};

	const showButtons = (computer) => {
		setButtons((prevButtons) => ({ ...prevButtons, [computer]: !prevButtons[computer] }));
	};

	return (
		<div ref={ref} className="favoritesPage">
			<h2>Tu carrito con los productos favoritos</h2>
			<br />
			<div className="favorites">
				{favorites.map((computer) => (
					<div
						onMouseEnter={() => showButtons(computer)}
						onMouseLeave={() => showButtons(computer)}>
						<div className="favorite-product">
							<img src={`/src/assets/${computer.name}.webp`} alt="computer"></img>
							<div className="favorite-product-info">
								<p>{computer.name}</p>
								<p>{computer.price}€</p>
							</div>
						</div>
						<div>
							<DeleteFav
								style={buttons[computer] && { opacity: 1 }}
								onClick={() => handleDelete(computer)}
							/>{" "}
						</div>
					</div>
				))}
			</div>
		</div>
	);
});

export default Favorites;
