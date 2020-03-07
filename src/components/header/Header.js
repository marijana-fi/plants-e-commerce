import React, { useEffect, useContext } from "react";
import "./header.scss";
import { Link } from "@reach/router";
import { CartContext } from "./../../context/CartContext";

const Header = () => {
	const { isOpen, toggleCart } = useContext(CartContext);

	return (
		<nav className="navbar">
			<Link to="/">
				<h3 className="logo">Plants</h3>
			</Link>
			<div className="cart" onClick={toggleCart}>
				<img src="./img/bag-icon.svg" alt="go to cart" />
			</div>
		</nav>
	);
};

export default Header;
