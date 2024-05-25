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
				<img className="image-preview" alt="" src="/src/assets/Frame Apple Mackbook Air.png" />
			</div>
			<div className="preview-card">
				<div className="product-preview" />
				<p className="price-preview">1,499€</p>
				<p className="laptop-name">Asus TUF Gaming F17</p>
				<p className="laptop-type">Portátil</p>
				<img className="image-preview" alt="" src="/src/assets/Frame Asus TUF Gaming F17.png" />
			</div>
			<div className="preview-card">
				<div className="product-preview" />
				<p className="price-preview">369€</p>
				<p className="laptop-name">Asus Chromebook Plus</p>
				<p className="laptop-type">Portátil</p>
				<img className="image-preview" alt="" src="/src/assets/Frame Asus Chromebook Plus.png" />
			</div>
		</div>
	);
};

export default HomeCards;
