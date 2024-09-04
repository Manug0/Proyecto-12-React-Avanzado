import React, { useContext } from "react";
import "./BrandFilter.css";
import { BrandContext } from "../../contexts/BrandContext";

const BrandFilter = () => {
	const [checked, setChecked] = useContext(BrandContext);
	const brands = ["Acer", "Alurin", "Apple", "Asus", "Lenovo", "LG"];

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
