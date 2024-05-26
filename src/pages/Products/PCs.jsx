import React, { useRef } from "react";
import "./PCs.css";
import PCsCards from "./PCsCards";
import PCsFilter from "./PCsFilter";
import { BrandProvider } from "../../components/BrandFilter/BrandContext";
import { PriceProvider } from "../../components/PriceFilter/PriceContext";
import Favorites from "../../pages/Favorites/Favorites";

const PCs = ({ cart, setCart, favRef }) => {
	window.scrollTo(0, 0);

	return (
		<div className="pcsPage">
			<div className="filter-cards-section">
				<BrandProvider>
					<PriceProvider>
						<PCsFilter />
						<PCsCards />
						<Favorites ref={favRef} />
					</PriceProvider>
				</BrandProvider>
			</div>
		</div>
	);
};

export default PCs;
