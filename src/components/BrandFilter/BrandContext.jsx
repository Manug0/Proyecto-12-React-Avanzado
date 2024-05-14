import React, { createContext, useState } from "react";

export const BrandContext = createContext();

export const BrandProvider = (props) => {
	const [checked, setChecked] = useState({});

	return (
		<BrandContext.Provider value={[checked, setChecked]}>{props.children}</BrandContext.Provider>
	);
};
