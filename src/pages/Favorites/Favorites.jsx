import React, { forwardRef } from "react";
import { useFavorites } from "./FavoritesProvider";
import DeleteFav from "../../components/DeleteCart/DeleteFav";
import ProductCounter from "../../components/Counter/ProductCounter";
import "./Favorites.css";
import { useCounter } from "../../components/Counter/CounterProvider";

const Favorites = forwardRef((props, ref) => {
	const { favorites, removeFavorite } = useFavorites();
	const { setCounter, counter } = useCounter();

	const handleDelete = (computer) => {
		removeFavorite(computer);
		setCounter((prevCounter) => ({
			...prevCounter,
			[computer.name]: 0,
		}));
	};

	return (
		<div ref={ref} className="favoritesPage">
			<div className="my-cart">
				<h2>Mi carrito</h2>
				<i className="ri-close-line"></i>
			</div>
			<div className="favorites">
				{favorites.map((computer) => (
					<div key={computer.name}>
						<div className="favorite-product">
							<img src={`/src/assets/${computer.name}.webp`} alt="computer" />
							<div className="favorite-product-info">
								<p>{computer.name}</p>
								<p>{computer.price}€</p>
								<p>
									Uds: <ProductCounter productName={computer.name} />
								</p>
								<p>
									{counter[computer.name] > 1 && (
										<p> Total:{counter[computer.name] * computer.price}€</p>
									)}
								</p>
							</div>
						</div>
						<div>
							<DeleteFav onClick={() => handleDelete(computer)} />
						</div>
					</div>
				))}
			</div>
		</div>
	);
});

export default Favorites;
