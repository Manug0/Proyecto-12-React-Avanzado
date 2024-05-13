import React, { useState } from "react";
import "./BrandFilter.css";

const BrandFilter = () => {
	const [checked, setChecked] = useState(false);

	const handleCheck = (event) => {
		setChecked(event.target.checked);
	};

	return (
		<div className="brand-filter">
			<h3>Filtrar por marca</h3>
			<div className="brand-checkbox">
				<div>
					{" "}
					<label>Acer</label>
					<input type="checkbox" checked={checked} onChange={handleCheck} />
				</div>
				<div>
					<label>Alurin</label>
					<input type="checkbox" checked={checked} onChange={handleCheck} />
				</div>
				<div>
					<label>Apple</label>
					<input type="checkbox" checked={checked} onChange={handleCheck} />
				</div>
				<div>
					<label>Asus</label>
					<input type="checkbox" checked={checked} onChange={handleCheck} />
				</div>
				<div>
					<label>Lenovo</label>
					<input type="checkbox" checked={checked} onChange={handleCheck} />
				</div>
				<div>
					<label>LG</label>
					<input type="checkbox" checked={checked} onChange={handleCheck} />
				</div>
			</div>
		</div>
	);
};

export default BrandFilter;
