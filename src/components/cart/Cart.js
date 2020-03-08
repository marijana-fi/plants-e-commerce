import React, { useContext } from "react";
import Counter from "../counter/Counter";
import "./cart.scss";
import { CartContext } from "../../context/CartContext";
import CartPlantItem from "../cart-plant-item/CartPlantItem";
import { formatPrice } from "./../../helpers";

const Cart = ({ plants }) => {
	const { isOpen, cart, toggleCart } = useContext(CartContext);
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
				{Object.keys(cart).map(key => {
					return (
						<CartPlantItem
							key={key}
							plantId={key}
							details={plants[key]}
						/>
					);
				})}
				<div className="cart-total">
					<h3>Total</h3>
					<h3>{formatPrice(total)}</h3>
				</div>
				<button className="cart-checkout">Checkout</button>
			</aside>
		</div>
	);
};

export default Cart;
