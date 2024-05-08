import "./App.css";

import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home/Home";
import Pcs from "./pages/Products/Cats";
import Form from "./pages/Form/Form";
import NotFound from "./components/NotFound";
import Favorites from "./pages/Favorites/Favorites";

function App() {
	return (
		<div className="App">
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/pcs" element={<Pcs />} />
				<Route path="/favorites" element={<Favorites />} />
				<Route path="/infoForm" element={<Form />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</div>
	);
}

export default App;
