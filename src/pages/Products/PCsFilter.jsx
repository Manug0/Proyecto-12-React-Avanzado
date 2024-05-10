import React from "react";
import "./PCsFilter.css";
import PriceSlider from "../../components/PriceSlider";

const PCsFilter = () => {
	return (
		<aside>
			<h2>Filtros de búsqueda</h2>
			<PriceSlider />
		</aside>
	);
};

export default PCsFilter;
