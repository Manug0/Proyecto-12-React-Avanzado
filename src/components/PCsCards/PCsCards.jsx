import React, { useContext, useState, useEffect } from "react";
import "./PCsCards.css";
import Cart from "../Cart/Cart";
import { BrandContext } from "../BrandFilter/BrandContext";
import { PriceContext } from "../PriceFilter/PriceContext";
import ProductPopup from "../ProductPopup/ProductPopup";
import NoFilteredComputer from "../NoFilteredComputer/NoFilteredComputer";
import Stars from "../Stars/Stars";
import useProductPopup from "../../contexts/useProductPopup";
import computers from "../../utils/computers";

const PCsCards = () => {
	const [checked] = useContext(BrandContext);
	const [value] = useContext(PriceContext);
	const { selectedProduct, isPopupVisible, popupRef, openPopup, closePopup } = useProductPopup();
	const [noFiltered, setNoFiltered] = useState(false);
	const [suggestedComputers, setSuggestedComputers] = useState([]);

	const getRandomComputers = (computers, count = 3) => {
		const shuffled = [...computers].sort(() => 0.5 - Math.random());
		return shuffled.slice(0, count);
	};

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

	useEffect(() => {
		if (filterComputers.length === 0 && !noFiltered) {
			setNoFiltered(true);
			if (suggestedComputers.length === 0) {
				const randomSuggestions = getRandomComputers(computers);
				setSuggestedComputers(randomSuggestions);
			}
		} else if (filterComputers.length > 0 && noFiltered) {
			setNoFiltered(false);
			setSuggestedComputers([]);
		}
	}, [filterComputers, noFiltered, suggestedComputers, computers]);

	return (
		<div className="Pcs">
			{filterComputers.map((computer, index) => (
				<div className="PcCard" key={index} onClick={() => openPopup(computer)}>
					<img key={index} src={`/${computer.name}.webp`} alt={computer.name} />
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
			{noFiltered && (
				<NoFilteredComputer suggestedComputers={suggestedComputers} openPopup={openPopup} />
			)}{" "}
			{isPopupVisible && (
				<ProductPopup
					computer={selectedProduct}
					closePopup={closePopup}
					ref={popupRef}
					isVisible={isPopupVisible}
				/>
			)}
		</div>
	);
};

export default PCsCards;
