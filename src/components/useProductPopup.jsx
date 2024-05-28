import { useState, useRef, useEffect, useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const useProductPopup = () => {
	const { darkTheme } = useContext(ThemeContext);
	const [selectedProduct, setSelectedProduct] = useState(null);
	const [isPopupVisible, setIsPopupVisible] = useState(false);
	const popupRef = useRef(null);

	const openPopup = (product) => {
		setSelectedProduct(product);
		setIsPopupVisible(true);
	};

	const closePopup = () => {
		setIsPopupVisible(false);
		setSelectedProduct(null);
	};

	const handleClickOutsidePopup = (event) => {
		if (popupRef.current && !popupRef.current.contains(event.target)) {
			closePopup();
		}
	};

	useEffect(() => {
		if (isPopupVisible) {
			document.body.classList.add("no-scroll");
			document.addEventListener("mousedown", handleClickOutsidePopup);
		} else {
			document.body.classList.remove("no-scroll");
			document.removeEventListener("mousedown", handleClickOutsidePopup);
		}

		if (popupRef.current) {
			if (darkTheme) {
				popupRef.current.classList.add("dark-theme");
			} else {
				popupRef.current.classList.remove("dark-theme");
			}
		}

		return () => {
			document.body.classList.remove("no-scroll");
			document.removeEventListener("mousedown", handleClickOutsidePopup);
		};
	}, [isPopupVisible, darkTheme]);

	return { selectedProduct, isPopupVisible, popupRef, openPopup, closePopup };
};

export default useProductPopup;
