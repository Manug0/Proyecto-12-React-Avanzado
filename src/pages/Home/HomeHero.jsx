import React, { useContext } from "react";
import "./HomeHero.css";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../../components/ThemeContext";

const HomeHero = () => {
	const navigate = useNavigate();
	const { darkTheme } = useContext(ThemeContext);

	const goToPCs = () => {
		navigate("/pcs");
	};
	return (
		<div className={`home-hero ${darkTheme ? "dark-theme" : ""}`}>
			<div className="wrapper">
				<div className="copyContainer">
					<div className="copyComponent">
						<div className="headingText">
							<b className="heading">Descubre las mejores ofertas en portátiles!</b>
							<div className="subheading">
								Encuentre el portátil perfecto para sus necesidades a precios inmejorables.
							</div>
						</div>

						<button className={`buy-now-button ${darkTheme ? "dark-theme" : ""}`} onClick={goToPCs}>
							<p className="buy-now-text">
								Comprar ahora <i class="ri-arrow-right-s-line"></i>
							</p>
						</button>
					</div>
				</div>
				<div className="mediaLayouts">
					<div className="device">
						<img
							className="appleMacbookAir13Silver"
							alt=""
							src="/Apple MacBook Air 13_ Silver.png"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomeHero;
