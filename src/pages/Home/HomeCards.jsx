import React from "react";
import "./HomeCards.css";
import ProductPopup from "../Products/ProductPopup";
import useProductPopup from "../../components/useProductPopup";

const HomeCards = () => {
	const { selectedProduct, isPopupVisible, popupRef, openPopup, closePopup } = useProductPopup();

	const homeComputers = [
		{
			name: "Apple MacBook Air",
			price: 1188,
			reviews: 15,
			brand: "Apple",
			description: "El MacBook Air es el compañero perfecto para trabajar y divertirte...",
		},
		{
			name: "Asus TUF Gaming F17",
			price: 1499,
			reviews: 11,
			brand: "Asus",
			description: "Ármate con un teclado estilo escritorio optimizado para juegos",
		},
		{
			name: "Asus Chromebook Plus",
			price: 369,
			reviews: 50,
			brand: "Asus",
			description: "El ASUS Chromebook Plus CX34 es potente, portátil...",
		},
	];

	return (
		<div className="home-cards">
			{homeComputers.map((computer, index) => (
				<div className="preview-card" key={index} onClick={() => openPopup(computer)}>
					<div className="product-preview" />
					<p className="price-preview">{computer.price}</p>
					<p className="laptop-name">{computer.name}</p>
					<p className="laptop-type">Portátil</p>
					<img className="image-preview" alt="" src={`/src/assets/${computer.name}.webp`} />
				</div>
			))}
			{isPopupVisible && (
				<ProductPopup computer={selectedProduct} closePopup={closePopup} ref={popupRef} />
			)}
		</div>
	);
};

export default HomeCards;
