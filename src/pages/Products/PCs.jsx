import React from "react";
import "./PCs.css";
import PCsFilter from "../../components/PCsFilters/PCsFilter";
import { BrandProvider } from "../../contexts/BrandContext";
import { PriceProvider } from "../../contexts/PriceContext";
import Favorites from "../../pages/Favorites/Favorites";
import PCsCards from "../../components/PCsCards/PCsCards";

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
