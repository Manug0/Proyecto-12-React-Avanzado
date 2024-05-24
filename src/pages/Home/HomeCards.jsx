import React from "react";
import "./HomeCards.css";

const HomeCards = () => {
	return (
		<div className="home-cards">
			<div className="preview-card">
				<div className="product-preview" />
				<p className="price-preview">1,188€</p>
				<p className="laptop-name">Apple MacBook Air</p>
				<p className="laptop-type">Portátil</p>
				<img className="image-preview" alt="" src="/src/assets/Apple Macbook Air.webp" />
			</div>
			<div className="preview-card">
				<div className="product-preview" />
				<p className="price-preview">1,499€</p>
				<p className="laptop-name">Asus TUF Gaming F17</p>
				<p className="laptop-type">Portátil</p>
				<img className="image-preview" alt="" src="/src/assets/Asus TUF Gaming F17.webp" />
			</div>
			<div className="preview-card">
				<div className="product-preview" />
				<p className="price-preview">369€</p>
				<p className="laptop-name">Asus Chromebook Plus</p>
				<p className="laptop-type">Portátil</p>
				<img className="image-preview" alt="" src="/src/assets/Asus Chromebook Plus.webp" />
			</div>
		</div>
	);
};

export default HomeCards;
