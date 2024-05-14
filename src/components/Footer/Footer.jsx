import React from "react";
import "./Footer.css";

const Footer = () => {
	return (
		<footer>
			<div className="footer-content">
				<div className="contact">
					<h5>Contacto</h5>
					<a href="/infoForm">Asistencia</a>
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
