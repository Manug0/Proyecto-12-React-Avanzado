import React from "react";
import "./PCsFilter.css";
import PriceSlider from "../../components/PriceFilter/PriceSlider";
import BrandFilter from "../../components/BrandFilter/BrandFilter";

const PCsFilter = () => {
	return (
		<aside className="search-filter">
			<div className="price-filter">
				<h3>Filtrar por precio</h3>
				<PriceSlider />
			</div>
			<BrandFilter />
		</aside>
	);
};

export default PCsFilter;
