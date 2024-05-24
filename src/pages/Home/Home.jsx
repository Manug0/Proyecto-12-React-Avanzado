import React from "react";
import "./Home.css";
import HomeHero from "./HomeHero";
import HomePicks from "./HomePicks";
import HomeCards from "./HomeCards";

const Home = () => {
	return (
		<div>
			<HomeHero />
			<HomeCards />
			<HomePicks />
		</div>
	);
};

export default Home;
