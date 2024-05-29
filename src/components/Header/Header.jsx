import React, { forwardRef, useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { useTheme } from "../ThemeContext";
import "./Header.css";

const Header = forwardRef(({ openCart, headerRef }) => {
	const { darkTheme, toggleTheme } = useTheme();
	const [openNav, setOpenNav] = useState(false);
	const navRef = useRef(null);
	const burgerMenuButton = useRef(null);
	const closeBurgerButton = useRef(null);

	const handleBurgerMenu = () => {
		setOpenNav(!openNav);
	};

	const handleCloseMenu = () => {
		setOpenNav(false);
	};

	useEffect(() => {
		function handleClickOutside(event) {
			if (
				openNav &&
				navRef.current &&
				!navRef.current.contains(event.target) &&
				!burgerMenuButton.current.contains(event.target)
			) {
				handleCloseMenu();
			}
		}

		document.addEventListener("click", handleClickOutside);
		return () => {
			document.removeEventListener("click", handleClickOutside);
		};
	}, [openNav]);

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
				<nav ref={navRef} className={openNav ? "open" : ""}>
					<NavLink
						className="navlink"
						exact
						activeClassName="active"
						to="/"
						onClick={handleCloseMenu}>
						Home
					</NavLink>
					<NavLink className="navlink" activeClassName="active" to="/pcs" onClick={handleCloseMenu}>
						Portátiles
					</NavLink>
					<i
						className="ri-shopping-cart-line"
						onClick={() => {
							openCart();
							handleCloseMenu();
						}}></i>
					<i ref={closeBurgerButton} onClick={handleCloseMenu} className="ri-close-line"></i>
					<i
						onClick={toggleTheme}
						className={darkTheme ? "ri-moon-line" : "ri-sun-line"}
						id="change-theme-button"></i>
				</nav>
			</div>
			<i ref={burgerMenuButton} onClick={handleBurgerMenu} class="ri-menu-5-fill"></i>
		</header>
	);
});

export default Header;
