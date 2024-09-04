import React, { useContext, useState } from "react";
import "./PriceSlider.css";
import Slider from "react-slider";
import { PriceContext } from "../../contexts/PriceContext";

const PriceSlider = () => {
	const [value, setValue] = useContext(PriceContext);

	const handleChange = (newValue) => {
		setValue(newValue);
	};

	return (
		<div className="price-range-container">
			{" "}
			<Slider value={value} onChange={handleChange} min={299} max={1499} withBars />
			<p className="price-range">
				Precio: {value[0]}€ - {value[1]}€
			</p>
		</div>
	);
};

export default PriceSlider;
