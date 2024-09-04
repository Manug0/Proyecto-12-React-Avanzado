import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { FavoritesProvider } from "./pages/Favorites/FavoritesProvider.jsx";
import { CounterProvider } from "./contexts/CounterProvider.jsx";
import { ThemeProvider } from "./contexts/ThemeContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<BrowserRouter>
		<ThemeProvider>
			<FavoritesProvider>
				<CounterProvider>
					<App />
				</CounterProvider>
			</FavoritesProvider>
		</ThemeProvider>
	</BrowserRouter>
);
