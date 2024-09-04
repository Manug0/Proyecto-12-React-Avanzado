import React, { forwardRef, useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import { useTheme } from "../../contexts/ThemeContext";
import { useFavorites } from "../../pages/Favorites/FavoritesProvider";

const Header = forwardRef(({ openCart, headerRef }) => {
	const { favorites } = useFavorites();
	const { darkTheme, toggleTheme } = useTheme();
	const [openNav, setOpenNav] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);
	const navRef = useRef(null);
	const burgerMenuButton = useRef(null);

	const cartCount = favorites.length;

	const handleBurgerMenu = () => {
		setOpenNav(!openNav);
	};

	const handleCloseMenu = () => {
		setOpenNav(false);
	};

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 0);
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

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

	return (
		<header
			ref={headerRef}
			className={`${darkTheme ? "dark-theme" : "light-theme"} ${isScrolled ? "squeeze" : ""}`}>
			<div className={`header-content ${isScrolled ? "squeeze" : ""}`}>
				<img
					className={`logo ${isScrolled ? "squeeze" : ""}`}
					src={darkTheme ? "/logo-dark-theme.png" : "/logo.png"}
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
					<div className="shopping-cart-container">
						<i
							className="ri-shopping-cart-line"
							onClick={() => {
								openCart();
								handleCloseMenu();
							}}></i>
						{cartCount > 0 && (
							<span
								className="counter"
								onClick={() => {
									openCart();
									handleCloseMenu();
								}}>
								{cartCount}
							</span>
						)}
					</div>

					<i onClick={handleCloseMenu} className="ri-close-line"></i>
					<i
						onClick={toggleTheme}
						className={darkTheme ? "ri-moon-line" : "ri-sun-line"}
						id="change-theme-button"></i>
				</nav>
			</div>
			<i ref={burgerMenuButton} onClick={handleBurgerMenu} className="ri-menu-5-fill"></i>
		</header>
	);
});

export default Header;
