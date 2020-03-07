import React from "react";
import "./header.scss";
import { Link } from "@reach/router";

const Header = ({ openCart }) => {
	const handleCartClick = () => {
		openCart();
	};
	return (
		<nav className="navbar">
			<Link to="/">
				<h3 className="logo">Plants</h3>
			</Link>
			<div className="cart" onClick={handleCartClick}>
				<img src="./img/bag-icon.svg" alt="go to cart" />
			</div>
		</nav>
	);
};

export default Header;
