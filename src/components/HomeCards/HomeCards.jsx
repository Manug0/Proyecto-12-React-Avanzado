import React from "react";
import "./HomeCards.css";
import ProductPopup from "../ProductPopup/ProductPopup";
import useProductPopup from "../../contexts/useProductPopup";

const HomeCards = () => {
	const { selectedProduct, isPopupVisible, popupRef, openPopup, closePopup } = useProductPopup();

	const homeComputers = [
		{
			name: "Apple MacBook Air",
			price: 1188,
			reviews: 15,
			brand: "Apple",
			description:
				"El MacBook Air es el compañero perfecto para trabajar y divertirte. Además, ahora el portátil más popular del mundo incluye el huracanado chip M3. Con este fichaje, un diseño ultracompacto y hasta 18 horas de autonomía, puede ir contigo donde quieras para ventilarte todo lo que te echen.",
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
			description:
				"El ASUS Chromebook Plus CX34 es potente, portátil y está preparado para llevar la productividad aún más lejos: ofrece el doble de velocidad, el doble de memoria y el doble de almacenamiento, además de funciones de Google y Adobe potenciadas por IA para darte más de lo que más te gusta.",
		},
	];

	return (
		<div className="home-cards-container">
			<div className="home-cards">
				{homeComputers.map((computer, index) => (
					<div className="preview-card" key={index} onClick={() => openPopup(computer)}>
						<div className="product-preview" />
						<p className="price-preview">{computer.price}€</p>
						<p className="laptop-name">{computer.name}</p>
						<p className="laptop-type">Portátil</p>
						<img className="image-preview" alt="" src={`/Frame ${computer.name}.png`} />
					</div>
				))}
				{isPopupVisible && (
					<ProductPopup
						computer={selectedProduct}
						closePopup={closePopup}
						ref={popupRef}
						isVisible={isPopupVisible}
					/>
				)}
			</div>
		</div>
	);
};

export default HomeCards;
