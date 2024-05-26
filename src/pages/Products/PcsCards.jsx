import React, { useContext, useEffect, useRef, useState } from "react";
import "./PCsCards.css";
import Stars from "../../components/Stars/Stars";
import Cart from "../../components/Cart/Cart";
import { BrandContext } from "../../components/BrandFilter/BrandContext";
import { PriceContext } from "../../components/PriceFilter/PriceContext";
import ProductPopup from "./ProductPopup";
import useProductPopup from "../../components/useProductPopup";

const PCsCards = () => {
	const [checked] = useContext(BrandContext);
	const [value] = useContext(PriceContext);
	const { selectedProduct, isPopupVisible, popupRef, openPopup, closePopup } = useProductPopup();

	const computers = [
		{
			name: "Acer Aspire 3",
			price: 429,
			reviews: 16,
			brand: "Acer",
			description:
				"Este elegante portátil Acer Aspire 3 A315 esconde un potente procesador AMD Ryzen 7 y gráficos AMD Radeon™ integrados para hacer el la mayor parte de su gran relación pantalla-cuerpo. Como es de esperar de una computadora portátil de este calibre, también incluye conectividad Wi-Fi súper rápida y mucho espacio de almacenamiento y memoria.",
		},
		{
			name: "Acer Nitro V 15",
			price: 849,
			reviews: 93,
			brand: "Acer",
			description:
				"Lleva tus aventuras gaming a otro nivel con el Acer Nitro V 15, tu pasaporte a un viaje cargado de adrenalina. Este portátil es la combinación perfecta de potencia y estilo, ya que supera los límites de lo que es posible en un portátil.",
		},
		{
			name: "Alurin Go Start Intel",
			price: 299,
			reviews: 98,
			brand: "Alurin",
			description:
				"¿Estás buscando un portátil rápido y eficiente que puedas llevar contigo a cualquier parte? Nuestro Alurin Go Start N4020 es la elección perfecta para ti. Podrás realizar tus tareas diarias con facilidad y sin retrasos.",
		},
		{
			name: "Apple Macbook Air",
			price: 1188,
			reviews: 15,
			brand: "Apple",
			description:
				"El MacBook Air es el compañero perfecto para trabajar y divertirte. Además, ahora el portátil más popular del mundo incluye el huracanado chip M3. Con este fichaje, un diseño ultracompacto y hasta 18 horas de autonomía,1 puede ir contigo donde quieras para ventilarte todo lo que te echen.",
		},
		{
			name: "Asus Chromebook Plus",
			price: 369,
			reviews: 50,
			brand: "Asus",
			description:
				"El ASUS Chromebook Plus CX34 es potente, portátil y está preparado para llevar la productividad aún más lejos: ofrece el doble de velocidad, el doble de memoria y el doble de almacenamiento1, además de funciones de Google y Adobe potenciadas por IA para darte más de lo que más te gusta.",
		},
		{
			name: "Asus TUF Gaming F17",
			price: 1499,
			reviews: 11,
			brand: "Asus",
			description: "Ármate con un teclado estilo escritorio optimizado para juegos",
		},
		{
			name: "Asus VivoBook 16X",
			price: 1099,
			reviews: 52,
			brand: "Asus",
			description:
				"¡Libera tu imaginación con el potente Vivobook 16X! Ya sea para el trabajo creativo o la diversión de los juegos, su procesador Intel® Core™ serie H de 12.ª generación y la GPU para portátiles hasta NVIDIA® GeForce RTX™ 40 le brindan toda la potencia multitarea que necesita.",
		},
		{
			name: "Lenovo Ideapad Slim 3",
			price: 599,
			reviews: 243,
			brand: "Lenovo",
			description:
				"Destaque en cualquier lugar con la computadora portátil Lenovo IdeaPad Slim 3, diseñada para ser liviana y delgada, de construcción robusta con resistencia y durabilidad de grado militar para soportar caídas y condiciones de viaje extremas.",
		},
		{
			name: "LG gram 14z90r",
			price: 600,
			reviews: 254,
			brand: "LG",
			description:
				"El más portátil de los portátiles desde 999g de peso LG gram es un portátil ultraligero y con la máxima autonomía, ideal para llevártelo de viaje, teletrabajar o estudiar desde cualquier lugar y en cualquier momento, aprovechando al máximo su alta portabilidad y autonomía.",
		},
	];

	const filterPrice = computers.filter((computer) => {
		return computer.price >= value[0] && computer.price <= value[1];
	});

	const filterComputers = computers.filter((computer) => {
		const isCheckboxChecked = Object.values(checked).some((value) => value);

		if (!isCheckboxChecked) {
			return computer.price >= value[0] && computer.price <= value[1];
		}

		if (computer.brand in checked && checked[computer.brand]) {
			return computer.price >= value[0] && computer.price <= value[1];
		}

		return false;
	});

	return (
		<div className="Pcs">
			{filterComputers.map((computer, index) => (
				<div className="PcCard" key={index} onClick={() => openPopup(computer)}>
					<img key={index} src={`/src/assets/${computer.name}.webp`} alt={computer.name} />
					<div className="cart-container">
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
						<Stars id={index} />
						<p>({computer.reviews})</p>
					</div>
				</div>
			))}
			{isPopupVisible && (
				<ProductPopup computer={selectedProduct} closePopup={closePopup} ref={popupRef} />
			)}
		</div>
	);
};

export default PCsCards;
