import React, { useState } from "react";
import "./PriceSlicer.css";
import Slider from "react-slider";

const PriceSlider = () => {
	const [value, setValue] = useState([130, 250]);

	const handleChange = (newValue) => {
		setValue(newValue);
	};
	return (
		<div>
			{" "}
			<Slider value={value} onChange={handleChange} min={130} max={500} withBars />
			<div>
				Valor: ${value[0]} - ${value[1]}
			</div>
		</div>
	);
};

export default PriceSlider;
