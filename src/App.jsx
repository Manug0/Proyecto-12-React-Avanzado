import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Form from "./pages/Form/Form";
import PCs from "./pages/Products/PCs";
import Header from "./components/Header/Header";
import NotFound from "./pages/NotFound/NotFound";
import Footer from "./components/Footer/Footer";
import { useEffect, useRef, useState } from "react";
import Favorites from "./pages/Favorites/Favorites";

function App() {
	const [cart, setCart] = useState(false);
	const favRef = useRef(null);
	const headerRef = useRef(null);
	const closeIconRef = useRef(null);

	const handleClickOutsideFav = (event) => {
		if (favRef.current && !favRef.current.contains(event.target)) {
			setCart(false);
		}
	};

	useEffect(() => {
		if (cart) {
			headerRef.current.classList.add("no-scroll");
			document.body.classList.add("no-scroll");
			document.addEventListener("mousedown", handleClickOutsideFav);
			if (closeIconRef.current) {
				closeIconRef.current.addEventListener("click", closeCart);
			}
			if (favRef.current) {
				favRef.current.classList.add("visible");
			}
		} else {
			headerRef.current.classList.remove("no-scroll");
			document.body.classList.remove("no-scroll");
			document.removeEventListener("mousedown", handleClickOutsideFav);
			if (closeIconRef.current) {
				closeIconRef.current.removeEventListener("click", closeCart);
			}
			if (favRef.current) {
				favRef.current.classList.remove("visible");
			}
		}

		return () => {
			headerRef.current.classList.remove("no-scroll");
			document.body.classList.remove("no-scroll");
			document.removeEventListener("mousedown", handleClickOutsideFav);
			if (closeIconRef.current) {
				closeIconRef.current.removeEventListener("click", closeCart);
			}
			if (favRef.current) {
				favRef.current.classList.remove("visible");
			}
		};
	}, [cart]);

	const closeCart = () => {
		setCart(false);
	};

	const openCart = () => {
		setCart(true);
	};

	return (
		<div className="App">
			<Header openCart={openCart} headerRef={headerRef} />
			<Routes>
				<Route
					path="/"
					element={
						<Home cart={cart} setCart={setCart} favRef={favRef} closeIconRef={closeIconRef} />
					}
				/>
				<Route
					path="/pcs"
					element={
						<PCs cart={cart} setCart={setCart} favRef={favRef} closeIconRef={closeIconRef} />
					}
				/>
				<Route path="/infoForm" element={<Form />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
			<div className={`overlay ${cart ? "visible" : ""}`} onClick={closeCart}></div>
			<Favorites refs={{ favRef, closeIconRef }} />
			<Footer />
		</div>
	);
}

export default App;
