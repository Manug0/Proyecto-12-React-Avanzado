import React, { useState } from "react";
import "./PriceSlider.css";
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
			<p className="price-range">
				Precio: {value[0]}€ - {value[1]}€
			</p>
		</div>
	);
};

export default PriceSlider;
