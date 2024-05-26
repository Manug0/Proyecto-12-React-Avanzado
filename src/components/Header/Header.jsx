import React, { forwardRef, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = forwardRef(({ openCart, headerRef }) => {
	const [darkTheme, setDarkTheme] = useState(localStorage.getItem("theme") === "dark");

	useEffect(() => {
		const currentTheme = localStorage.getItem("theme");
		if (currentTheme === "dark") {
			document.body.classList.add("dark-theme");
		} else {
			document.body.classList.remove("dark-theme");
		}
	}, []);

	const handleTheme = () => {
		setDarkTheme(!darkTheme);
		const elements = document.querySelectorAll(
			"body, header, .request-info, h2, h3, h4, h5, p, i, a, label, input, form button, .PcCard, .info, footer, .slider, .rect, .favoritesPage "
		);
		elements.forEach((element) => {
			if (darkTheme) {
				element.classList.remove("dark-theme");
				localStorage.setItem("theme", "light");
			} else {
				element.classList.add("dark-theme");
				localStorage.setItem("theme", "dark");
			}
		});

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
	};

	return (
		<header ref={headerRef}>
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
					<i class="ri-shopping-cart-line" onClick={openCart}></i>
				</nav>
				<i
					onClick={handleTheme}
					class={document.body.classList.contains("dark-theme") ? "ri-moon-line" : "ri-sun-line"}
					id="change-theme-button"></i>
			</div>
		</header>
	);
});

export default Header;
