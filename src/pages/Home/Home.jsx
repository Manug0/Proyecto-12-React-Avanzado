import React from "react";
import "./Home.css";
import HomeHero from "../../components/HomeHero/HomeHero";
import HomePicks from "../../components/HomePicks/HomePicks";
import HomeCards from "../../components/HomeCards/HomeCards";
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
