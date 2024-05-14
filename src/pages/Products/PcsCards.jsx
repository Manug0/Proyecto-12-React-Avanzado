import React, { useContext } from "react";
import "./PCsCards.css";
import Stars from "../../components/Stars/Stars";
import Cart from "../../components/Cart/Cart";
import { BrandContext } from "../../components/BrandFilter/BrandContext";
import { PriceContext } from "../../components/PriceFilter/PriceContext";

const PCsCards = () => {
	const [checked] = useContext(BrandContext);
	const [value] = useContext(PriceContext);
	const computers = [
		{ name: "Acer Aspire 3", price: 429, reviews: 16, brand: "Acer" },
		{ name: "Acer Nitro V 15", price: 849, reviews: 93, brand: "Acer" },
		{ name: "Alurin Go Start Intel", price: 299, reviews: 98, brand: "Alurin" },
		{ name: "Apple Macbook Air", price: 1188, reviews: 15, brand: "Apple" },
		{ name: "Asus Chromebook Plus", price: 369, reviews: 50, brand: "Asus" },
		{ name: "Asus TUF Gaming F17", price: 1499, reviews: 11, brand: "Asus" },
		{ name: "Asus VivoBook 16X", price: 1099, reviews: 52, brand: "Asus" },
		{ name: "Lenovo Ideapad Slim 3", price: 599, reviews: 243, brand: "Lenovo" },
		{ name: "LG gram 14z90r", price: 600, reviews: 254, brand: "LG" },
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
				<div className="PcCard" key={index}>
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
		</div>
	);
};

export default PCsCards;
