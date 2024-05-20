import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
	const [darkTheme, setDarkTheme] = useState(false);

	window.addEventListener("scroll", function () {
		const header = document.querySelector("header");
		const headerContent = document.querySelector(".header-content");
		const logo = document.querySelector(".logo");
		const nav = document.querySelector("nav");
		if (window.scrollY > 0) {
			header.classList.add("squeeze");
			headerContent.classList.add("squeeze");
			logo.classList.add("squeeze");
			nav.classList.add("squeeze");
		} else {
			header.classList.remove("squeeze");
			headerContent.classList.remove("squeeze");
			logo.classList.remove("squeeze");
			nav.classList.remove("squeeze");
		}
	});

	const handleTheme = () => {
		setDarkTheme(!darkTheme);
		const elements = document.querySelectorAll(
			"body, header, .request-info, h2, h3, h4, h5, p, i, a, label, input, form button, .PcCard, .info, footer, .slider "
		);
		elements.forEach((element) => {
			if (darkTheme) {
				element.classList.add("dark-theme");
			} else {
				element.classList.remove("dark-theme");
			}
		});
	};

	return (
		<header>
			<div className="header-content">
				<img
					className="logo"
					src={
						document.body.classList.contains("dark-theme")
							? "/src/assets/logo-dark-theme.png"
							: "/src/assets/logo.png"
					}
					alt="logo"
				/>
				<nav>
					<NavLink className="navlink" exact activeClassName="active" to="/">
						Home
					</NavLink>
					<NavLink className="navlink" activeClassName="active" to="/pcs">
						Portátiles
					</NavLink>
					<NavLink className="navlink" activeClassName="active" to="/favorites">
						<i class="ri-shopping-cart-line"></i>
					</NavLink>
					<i
						onClick={handleTheme}
						class={document.body.classList.contains("dark-theme") ? "ri-moon-line" : "ri-sun-line"}
						id="change-theme-button"></i>
				</nav>
			</div>
		</header>
	);
};

export default Header;
