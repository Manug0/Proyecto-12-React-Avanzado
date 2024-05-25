import React from "react";
import "./Footer.css";
import { useNavigate } from "react-router-dom";

const Footer = () => {
	const navigate = useNavigate();

	const goToForm = () => {
		navigate("/infoForm");
	};
	return (
		<footer>
			<div className="footer-main-content">
				<div className="support">
					<h5>Soporte</h5>
					<p onClick={goToForm}>Asistencia</p>
					<p>FAQs</p>
					<p>Envíos</p>
					<p>Devoluciones</p>
				</div>
				<div className="legal">
					<h5>Legal</h5>
					<p>Política de privacidad</p>
					<p>Términos y condiciones</p>
					<p>Cookies</p>
				</div>
				<div className="socials">
					<i class="ri-twitter-x-line"></i>
					<i class="ri-instagram-line"></i>
					<i class="ri-youtube-line"></i>
					<i class="ri-facebook-box-line"></i>
				</div>
			</div>
			<div className="rights">
				<p>© MyPC 2024. Todos los derechos reservados</p>
				<p>Made by Manu 🖌️</p>
			</div>
		</footer>
	);
};

export default Footer;
