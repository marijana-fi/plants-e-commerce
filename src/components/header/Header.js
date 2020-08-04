import React, { useContext } from "react";
import "./header.scss";
import { Link } from "@reach/router";
import { CartContext } from "./../../context/CartContext";

const Header = () => {
	const { cart, toggleCart, isCartIconHidden, revealCartIcon } = useContext(
		CartContext
	);
	const itemNumber = Object.values(cart).reduce((a, b) => a + b, 0);
	const handleClick = (params) => {
		revealCartIcon();
	};
	return (
		<div className="nav-container">
			<nav className="navbar">
				<Link to="/" className="home-link" aria-label="Go to home page">
					<h3 className="logo" onClick={handleClick}>
						Plants
					</h3>
				</Link>
				<button
					className={`cart ${isCartIconHidden ? "hide" : null}`}
					onClick={toggleCart}
				>
					<img src="./img/bag-icon.svg" alt="go to cart" />
					<div className="cart-items">
						<h6 className="item-number">{itemNumber}</h6>
					</div>
				</button>
			</nav>
		</div>
	);
};

export default Header;
