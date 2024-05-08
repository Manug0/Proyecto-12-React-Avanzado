import React from "react";
import "./PcsCards.css";
import Heart from "../../components/Heart";
import Stars from "../../components/Stars";
import Cart from "../../components/Cart";

const PcsCards = () => {
	const computers = [
		{ name: "Acer Aspire 3", price: 429, reviews: 16 },
		{ name: "Acer Nitro V 15", price: 849, reviews: 93 },
		{ name: "Alurin Go Start Intel", price: 299, reviews: 98 },
		{ name: "Apple Macbook Air", price: 1.188, reviews: 15 },
		{ name: "Asus Chromebook Plus", price: 369, reviews: 50 },
		{ name: "Asus TUF Gaming F17", price: 1.499, reviews: 11 },
		{ name: "Asus VivoBook 16X", price: 1.099, reviews: 52 },
		{ name: "Lenovo Ideapad Slim 3", price: 599, reviews: 243 },
		{ name: "LG gram 14z90r", price: 600, reviews: 254 },
	];

	return (
		<div className="Pcs">
			{computers.map((computer, index) => (
				<div className="PcCard">
					<img key={index} src={`/src/assets/${computer.name}.webp`} alt={computer.name} />
					<div className="heart-container">
						<Cart computer={computer} />

						{/* <Heart  /> */}
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

export default PcsCards;
