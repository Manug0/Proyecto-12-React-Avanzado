import React, { createContext, useContext, useState } from "react";

const CounterContext = createContext();

export const useCounter = () => useContext(CounterContext);

export const CounterProvider = ({ children }) => {
	const [counter, setCounter] = useState({});

	const incrementCounter = (productName) => {
		setCounter((prevCounter) => ({
			...prevCounter,
			[productName]: (prevCounter[productName] || 0) + 1,
		}));
	};

	const getCounter = (productName) => counter[productName] || 0;

	return (
		<CounterContext.Provider value={{ counter, setCounter, incrementCounter, getCounter }}>
			{children}
		</CounterContext.Provider>
	);
};
