import React from "react";
import "./HomeHero.css";
import { useNavigate } from "react-router-dom";

const HomeHero = () => {
	const navigate = useNavigate();

	const goToPCs = () => {
		navigate("/pcs");
	};
	return (
		<div className="home-hero">
			<div className="wrapper">
				<div className="copyContainer">
					<div className="copyComponent">
						<div className="headingText">
							<b className="heading">Descubre las mejores ofertas en portátiles!</b>
							<div className="subheading">
								Encuentre el portátil perfecto para sus necesidades a precios inmejorables.
							</div>
						</div>

						<button className="buy-now-button" onClick={goToPCs}>
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
							src="/src/assets/Apple MacBook Air 13_ Silver.png"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomeHero;
