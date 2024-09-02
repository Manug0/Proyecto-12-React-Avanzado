import React from "react";
import "./NoFilteredComputer.css";

const NoFilteredComputer = ({ suggestedComputers, openPopup }) => {
	return (
		<div className="no-filtered-container">
			<div className="suggestions-text-container">
				{" "}
				<h3 className="not-found">No se encontraron ordenadores 🤔</h3>
				<h4 className="suggestions-h4">Aquí tienes nuestras sugerencias:</h4>
			</div>
			<div className="suggestions">
				{suggestedComputers.map((computer, index) => (
					<div className="PcCard" key={index} onClick={() => openPopup(computer)}>
						<img src={`/${computer.name}.webp`} alt={computer.name} />
						<div className="name-and-price">
							<p>{computer.name}</p>
							<p className="price">{computer.price}€</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default NoFilteredComputer;
