import React from "react";
import "./PCsFilter.css";
import PriceSlider from "../../components/PriceFilter/PriceSlider";
import BrandFilter from "../../components/BrandFilter/BrandFilter";

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
