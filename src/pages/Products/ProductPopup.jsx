import React, { forwardRef, useEffect } from "react";
import "./ProductPopup.css";
import Cart from "../../components/Cart/Cart";
import Stars from "../../components/Stars/Stars";
import { useTheme } from "../../components/ThemeContext";

const ProductPopup = forwardRef(({ computer, closePopup, isVisible }, ref) => {
	const { darkTheme, updateThemeClasses } = useTheme();

	useEffect(() => {
		if (isVisible) {
			const popup = document.querySelector(".product-popup-content");
			if (popup) {
				updateThemeClasses(darkTheme);
			}
		}
	}, [isVisible, darkTheme, updateThemeClasses]);

	if (!isVisible) return null;

	return (
		<div className="product-popup">
			<div className="product-popup-content" ref={ref}>
				<i className="ri-close-line" onClick={closePopup}></i>
				<img src={`/${computer.name}.webp`} alt={computer.name} />
				<div className="cart-container-popup">
					<Cart computer={computer} />
				</div>
				<div className="name-and-price">
					<p>{computer.name}</p>
					<p className="price">{computer.price}€</p>
				</div>
				<div className="shipment">
					<p className="free-ship">Envío gratis</p>
					<p>Recíbelo mañana</p>
				</div>
				<div className="reviews">
					<Stars />
					<p>({computer.reviews})</p>
				</div>
				<div className="description">
					<p>{computer.description}</p>
				</div>
			</div>
		</div>
	);
});

export default ProductPopup;
