import React from "react";
import "./Home.css";
import HomeHero from "./HomeHero";
import HomePicks from "./HomePicks";
import HomeCards from "./HomeCards";
import Favorites from "../Favorites/Favorites";

const Home = ({ cart, setCart, favRef, closeIconRef }) => {
	window.scrollTo(0, 0);

	return (
		<>
			<HomeHero />
			<HomeCards />
			<HomePicks />
			<Favorites refs={{ favRef, closeIconRef }} />
		</>
	);
};

export default Home;
