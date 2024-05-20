import React, { useState } from "react";
import "./Stars.css";

const Stars = ({ id }) => {
	return (
		<div className="rate">
			<input type="radio" id={`star5-${id}`} name={`rate-${id}`} value="5" />
			<label htmlFor={`star5-${id}`} title="text"></label>
			<input type="radio" id={`star4-${id}`} name={`rate-${id}`} value="4" />
			<label htmlFor={`star4-${id}`} title="text"></label>
			<input type="radio" id={`star3-${id}`} name={`rate-${id}`} value="3" />
			<label htmlFor={`star3-${id}`} title="text"></label>
			<input type="radio" id={`star2-${id}`} name={`rate-${id}`} value="2" />
			<label htmlFor={`star2-${id}`} title="text"></label>
			<input type="radio" id={`star1-${id}`} name={`rate-${id}`} value="1" />
			<label htmlFor={`star1-${id}`} title="text"></label>
		</div>
	);
};

export default Stars;
