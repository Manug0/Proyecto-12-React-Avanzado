import "./App.css";

import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home/Home";

import Form from "./pages/Form/Form";
import PCs from "./pages/Products/PCs";
import Header from "./components/Header/Header";
import NotFound from "./pages/NotFound/NotFound";
import Footer from "./components/Footer/Footer";
import { useEffect, useRef, useState } from "react";

function App() {
	const [cart, setCart] = useState(false);
	const favRef = useRef(null);
	const headerRef = useRef(null);

	const handleClickOutisdeFav = (event) => {
		if (favRef.current && !favRef.current.contains(event.target)) {
			setCart(false);
		}
	};

	useEffect(() => {
		if (cart) {
			headerRef.current.classList.add("no-scroll");
			document.body.classList.add("no-scroll");
			document.addEventListener("mousedown", handleClickOutisdeFav);
			if (favRef.current) {
				favRef.current.classList.add("visible");
			}
		} else {
			headerRef.current.classList.remove("no-scroll");
			document.body.classList.remove("no-scroll");
			document.removeEventListener("mousedown", handleClickOutisdeFav);
			if (favRef.current) {
				favRef.current.classList.remove("visible");
			}
		}

		return () => {
			headerRef.current.classList.remove("no-scroll");
			document.body.classList.remove("no-scroll");
			document.removeEventListener("mousedown", handleClickOutisdeFav);
			if (favRef.current) {
				favRef.current.classList.remove("visible");
			}
		};
	}, [cart]);

	const openCart = () => {
		setCart(!cart);
	};

	return (
		<div className="App">
			<Header openCart={openCart} headerRef={headerRef} />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/pcs" element={<PCs cart={cart} setCart={setCart} favRef={favRef} />} />
				<Route path="/infoForm" element={<Form />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
			<div className={`overlay ${cart ? "visible" : ""}`} onClick={() => setCart(false)}></div>
			{/* {cart && <Favorites className="visible" />} */}
			<Footer />
		</div>
	);
}

export default App;
