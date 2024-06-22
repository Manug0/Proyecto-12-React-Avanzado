import React, { useContext } from "react";
import "./HomePicks.css";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../../components/ThemeContext";

const HomePicks = () => {
	const { darkTheme } = useContext(ThemeContext);

	const navigate = useNavigate();

	const goToPCs = () => {
		navigate("/pcs");
	};
	return (
		<div className={`home-picks ${darkTheme ? "dark-theme" : ""}`}>
			<div className="content">
				<div className="headingContainer">
					<b className="heading">Mejores elecciones para ti</b>
				</div>
				<div className="cardsGrid">
					<div className="cards">
						<img className="imageLummi" alt="GamingLaptop" src="/GamingLaptop.png" />
						<div className="content1">
							<div className="copy">
								<p className={`cardTitle ${darkTheme ? "dark-theme" : ""}`}>PC Gaming</p>
								<p className={`cardDescription ${darkTheme ? "dark-theme" : ""}`}>
									Alto rendimiento para jugar o trabajar
								</p>
								<button className="readMore" onClick={goToPCs}>
									Ver portátiles <i class="ri-arrow-right-s-line"></i>
								</button>
							</div>
						</div>
					</div>
					<div className="cards">
						<img className="imageLummi" alt="BusinessLaptop" src="/BusinessLaptop.png" />
						<div className="content1">
							<div className="copy">
								<p className={`cardTitle ${darkTheme ? "dark-theme" : ""}`}>Pc para negocios</p>
								<p className={`cardDescription ${darkTheme ? "dark-theme" : ""}`}>
									Eficente y confiable par cualquier tarea
								</p>
								<button className="readMore" onClick={goToPCs}>
									Ver portátiles <i class="ri-arrow-right-s-line"></i>
								</button>
							</div>
						</div>
					</div>
					<div className="cards">
						<img className="imageLummi" alt="StudentLaptop" src="/StudentLaptop.png" />
						<div className="content1">
							<div className="copy">
								<p className={`cardTitle ${darkTheme ? "dark-theme" : ""}`}>PC para estudiante</p>
								<p className={`cardDescription ${darkTheme ? "dark-theme" : ""}`}>
									Asequible y duradero para el aprendizaje.
								</p>
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
