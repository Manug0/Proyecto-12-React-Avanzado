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
			<div className="footer-content">
				<div className="contact">
					<h5>Contacto</h5>
					<p onClick={goToForm}>Asistencia</p>
				</div>
				<div className="socials">
					<i class="ri-twitter-x-line"></i>
					<i class="ri-instagram-line"></i>
					<i class="ri-youtube-line"></i>
					<i class="ri-facebook-box-line"></i>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
