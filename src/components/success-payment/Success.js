import React, { useEffect, useContext } from "react";
import "./success.scss";
import { Link } from "@reach/router";
import { CartContext } from "../../context/CartContext";

export default function Success() {
	const { clearCart } = useContext(CartContext);

	useEffect(() => {
		clearCart();
	}, []);

	return (
		<div className="success-page">
			<svg
				version="1.1"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 130.2 130.2"
			>
				<circle
					className="path circle"
					fill="none"
					stroke="#000"
					strokeWidth="4"
					strokeMiterlimit="10"
					cx="65.1"
					cy="65.1"
					r="62.1"
				/>
				<polyline
					className="path check"
					fill="none"
					stroke="#000"
					strokeWidth="4"
					strokeLinecap="round"
					strokeMiterlimit="10"
					points="100.2,40.2 51.5,88.8 29.8,67.5 "
				/>
			</svg>
			<div className="success message">
				<h3>Your payment was successful</h3>
			</div>
			<Link to="/" className="home-link">
				<h3 className="logo">Back to home</h3>
			</Link>
		</div>
	);
}
