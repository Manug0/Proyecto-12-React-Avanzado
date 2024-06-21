import React from "react";
import "./PCs.css";
import PCsFilter from "./PCsFilter";
import { BrandProvider } from "../../components/BrandFilter/BrandContext";
import { PriceProvider } from "../../components/PriceFilter/PriceContext";
import Favorites from "../../pages/Favorites/Favorites";
import PCsCards from "./PCsCards";

const PCs = ({ cart, setCart, favRef, closeIconRef }) => {
	window.scrollTo(0, 0);

	return (
		<div className="pcsPage">
			<div className="filter-cards-section">
				<BrandProvider>
					<PriceProvider>
						<PCsFilter />
						<PCsCards></PCsCards>
						<Favorites refs={{ favRef, closeIconRef }} />
					</PriceProvider>
				</BrandProvider>
			</div>
		</div>
	);
};

export default PCs;
