import React, { forwardRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useTheme } from "../ThemeContext";
import "./Header.css";

const Header = forwardRef(({ openCart, headerRef }) => {
	const { darkTheme, toggleTheme } = useTheme();

	useEffect(() => {
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
	}, []);

	return (
		<header ref={headerRef}>
			<div className="header-content">
				<img
					className="logo"
					src={darkTheme ? "/src/assets/logo-dark-theme.png" : "/src/assets/logo.png"}
					alt="logo"
				/>
				<nav>
					<NavLink className="navlink" exact activeClassName="active" to="/">
						Home
					</NavLink>
					<NavLink className="navlink" activeClassName="active" to="/pcs">
						Portátiles
					</NavLink>
					<i className="ri-shopping-cart-line" onClick={openCart}></i>
				</nav>
				<i
					onClick={toggleTheme}
					className={darkTheme ? "ri-moon-line" : "ri-sun-line"}
					id="change-theme-button"></i>
			</div>
		</header>
	);
});

export default Header;
