import React, { createContext, useState } from "react";

export const PriceContext = createContext();

export const PriceProvider = (props) => {
	const [value, setValue] = useState([299, 1499]);
	return <PriceContext.Provider value={[value, setValue]}>{props.children}</PriceContext.Provider>;
};
