import "./App.css";

import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home/Home";

import Form from "./pages/Form/Form";
import NotFound from "./components/NotFound";
import Favorites from "./pages/Favorites/Favorites";
import Footer from "./components/Footer";
import PCs from "./pages/Products/PCs";

function App() {
	return (
		<div className="App">
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/pcs" element={<PCs />} />
				<Route path="/favorites" element={<Favorites />} />
				<Route path="/infoForm" element={<Form />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
