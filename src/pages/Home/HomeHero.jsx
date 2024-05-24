import React from "react";
import "./HomeHero.css";

const HomeHero = () => {
	return (
		<div className="softwareHeroLaptopMockup">
			<div className="wrapper">
				<div className="copyContainer">
					<div className="copyComponent">
						<div className="headingText">
							<b className="heading">Descubre las mejores ofertas en portátiles!</b>
							<div className="subheading">
								Encuentre el portátil perfecto para sus necesidades a precios inmejorables.
							</div>
						</div>
						<div className="buttonCombo">
							<div className="ctaButton">
								<div className="textContainer">
									<p className="cta">Comprar ahora</p>
								</div>
							</div>
						</div>
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
