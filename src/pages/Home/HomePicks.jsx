import React from "react";
import "./HomePicks.css";
import { useNavigate } from "react-router-dom";

const HomePicks = () => {
	const navigate = useNavigate();

	const goToPCs = () => {
		navigate("/pcs");
	};
	return (
		<div className="home-picks">
			<div className="content">
				<div className="headingContainer">
					<b className="heading">Mejores elecciones para ti</b>
				</div>
				<div className="cardsGrid">
					<div className="cards">
						<img className="imageLummi" alt="GamingLaptop" src="/src/assets/GamingLaptop.png" />
						<div className="content1">
							<div className="copy">
								<p className="cardTitle">PC Gaming</p>
								<p className="cardDescription">Alto rendimiento para jugar o trabajar</p>
								<button className="readMore" onClick={goToPCs}>
									Ver portátiles <i class="ri-arrow-right-s-line"></i>
								</button>
							</div>
						</div>
					</div>
					<div className="cards">
						<img className="imageLummi" alt="BusinessLaptop" src="/src/assets/BusinessLaptop.png" />
						<div className="content1">
							<div className="copy">
								<p className="cardTitle">Pc para negocios</p>
								<p className="cardDescription">Eficente y confiable par cualquier tarea</p>
								<button className="readMore" onClick={goToPCs}>
									Ver portátiles <i class="ri-arrow-right-s-line"></i>
								</button>
							</div>
						</div>
					</div>
					<div className="cards">
						<img className="imageLummi" alt="StudentLaptop" src="/src/assets/StudentLaptop.png" />
						<div className="content1">
							<div className="copy">
								<p className="cardTitle">PC para estudiante</p>
								<p className="cardDescription">Asequible y duradero para el aprendizaje.</p>
								<button className="readMore" onClick={goToPCs}>
									Ver portátiles <i class="ri-arrow-right-s-line"></i>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomePicks;
