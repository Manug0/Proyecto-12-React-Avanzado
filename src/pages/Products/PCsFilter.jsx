import React from "react";
import "./PCsFilter.css";
import PriceSlider from "../../components/PriceSlider";
import BrandFilter from "../../components/BrandFilter";

const PCsFilter = () => {
	return (
		<aside className="search-filter">
			<h2>Filtros de búsqueda</h2>
			<PriceSlider />
			<BrandFilter />
		</aside>
	);
};

export default PCsFilter;
