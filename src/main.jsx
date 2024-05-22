import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { FavoritesProvider } from "./pages/Favorites/FavoritesProvider.jsx";
import { CounterProvider } from "./components/Counter/CounterProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<BrowserRouter>
		<FavoritesProvider>
			<CounterProvider>
				<App />
			</CounterProvider>
		</FavoritesProvider>
	</BrowserRouter>
);
