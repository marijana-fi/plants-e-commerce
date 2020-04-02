import React, { useContext } from "react";
import "./cart.scss";
import { CartContext } from "../../context/CartContext";
import CartPlantItem from "../cart-plant-item/CartPlantItem";
import { formatPrice } from "./../../helpers";
import { navigate } from "@reach/router";

const Cart = ({ plants }) => {
	const { isOpen, cart, toggleCart, hideCartIcon } = useContext(CartContext);
	const orders = Object.keys(cart);

	let total = 0;

	if (orders.length) {
		total = orders.reduce((prevTotal, key) => {
			const plant = plants[key];
			const quantity = cart[key];
			return prevTotal + plant.price * quantity;
		}, 0);
	}

	const handleClick = () => {
		toggleCart();
	};
	const handleCheckout = params => {
		navigate("/checkout");
		toggleCart();
		hideCartIcon();
	};

	return (
		<div className={isOpen ? "cart-modal active" : "cart-modal"}>
			<div className="backdrop" onClick={handleClick} />
			<aside className="cart">
				<div className="cart-header">
					<h3 className="cart-title">Cart</h3>
					<button className="cart-close" onClick={handleClick}>
						&times;
					</button>
				</div>

				{!orders.length ? (
					<h2 className="empty">Your cart is currently empty.</h2>
				) : (
					Object.keys(cart).map(key => {
						return (
							<CartPlantItem
								key={key}
								plantId={key}
								details={plants[key]}
							/>
						);
					})
				)}

				<div className="cart-total">
					<h3 className="total">Total</h3>
					<h3 className="total">{formatPrice(total)}</h3>
				</div>
				<button
					className="btn light"
					onClick={handleCheckout}
					disabled={!orders.length}
				>
					Checkout
				</button>
			</aside>
		</div>
	);
};

export default Cart;
