import React, { useContext, useEffect, useState } from "react";
import "./BrandFilter.css";
import { BrandContext } from "../../contexts/BrandContext";
import computers from "../../utils/computers";

const BrandFilter = () => {
	const [checked, setChecked] = useContext(BrandContext);
	const [brands, setBrands] = useState([]);

	useEffect(() => {
		const uniqueBrands = [...new Set(computers.map((computer) => computer.brand))];
		setBrands(uniqueBrands);
	}, []);

	const handleCheck = (brand) => {
		setChecked((prevState) => ({ ...prevState, [brand]: !prevState[brand] }));
	};

	return (
		<div className="brand-filter">
			<h3>Filtrar por marca</h3>
			<div className="brand-checkbox">
				{brands.map((brand) => (
					<div key={brand}>
						<label>{brand}</label>
						<input type="checkbox" checked={!!checked[brand]} onChange={() => handleCheck(brand)} />
					</div>
				))}
			</div>
		</div>
	);
};

export default BrandFilter;
