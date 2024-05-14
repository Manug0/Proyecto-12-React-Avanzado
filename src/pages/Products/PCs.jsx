import React from "react";
import "./PCs.css";
import PCsCards from "./PCsCards";
import PCsFilter from "./PCsFilter";
import { BrandProvider } from "../../components/BrandFilter/BrandContext";
import { PriceProvider } from "../../components/PriceFilter/PriceContext";

// usememo?

const PCs = () => {
	return (
		<div className="pcsPage">
			<div className="info">
				<h3>Encuentra aquí nuestros portátiles de las mejores marcas</h3>
				<h3>
					Ya sea para jugar o para trabajar, dispondrás de la máxima calidad y rendimiento a un
					precio competitivo
				</h3>
			</div>
			<div className="filter-cards-section">
				<BrandProvider>
					<PriceProvider>
						<PCsFilter />
						<PCsCards />
					</PriceProvider>
				</BrandProvider>
			</div>
		</div>
	);
};

export default PCs;
