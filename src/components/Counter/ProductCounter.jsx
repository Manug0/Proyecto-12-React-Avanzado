import React, { forwardRef } from "react";
import { useCounter } from "./CounterProvider";
import "./ProductCounter.css";

const ProductCounter = forwardRef(({ productName }, ref) => {
	const { getCounter } = useCounter();
	const counter = getCounter(productName);

	return <p ref={ref}>{counter}</p>;
});

export default ProductCounter;
