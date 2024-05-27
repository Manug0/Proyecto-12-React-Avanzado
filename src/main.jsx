import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { FavoritesProvider } from "./pages/Favorites/FavoritesProvider.jsx";
import { CounterProvider } from "./components/Counter/CounterProvider.jsx";
import { ThemeProvider } from "./components/ThemeContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<BrowserRouter>
		<FavoritesProvider>
			<CounterProvider>
				<ThemeProvider>
					<App />
				</ThemeProvider>
			</CounterProvider>
		</FavoritesProvider>
	</BrowserRouter>
);
