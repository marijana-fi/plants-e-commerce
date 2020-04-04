import React, { useContext, useState, useEffect } from "react";
import "./checkout.scss";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import PaymentForm from "../payment-form/PaymentForm";
import CartPlantItem from "../cart-plant-item/CartPlantItem";
import { CartContext } from "./../../context/CartContext";
import { formatPrice } from "./../../helpers";
import { Link, navigate } from "@reach/router";

const stripePromise = loadStripe("pk_test_BLj4krRrl37dHt7q5Sbk2klf00W1ckUZfZ");

const Checkout = ({ plants }) => {
	const { cart } = useContext(CartContext);
	const orders = Object.keys(cart);
	const [succeeded, setSucceeded] = useState(false);

	let total = 0;

	if (succeeded) {
		navigate("/payment-successful");
	}

	if (orders.length) {
		total = orders.reduce((prevTotal, key) => {
			const plant = plants[key];
			const quantity = cart[key];
			return prevTotal + plant.price * quantity;
		}, 0);
	}

	const renderEmpty = () => {
		return (
			<div className="empty-checkout">
				<h2>Your cart is currently empty.</h2>
				<Link to="/" className="home-link">
					<h3 className="logo">Back to home</h3>
				</Link>
			</div>
		);
	};

	return orders.length ? (
		<div className="container">
			<div className="contact-wrap">
				<Elements stripe={stripePromise}>
					<PaymentForm total={total} setSucceeded={setSucceeded} />
				</Elements>
			</div>

			<div className="order-summary">
				<h2 className="title">Order Summary</h2>
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
					<h3 className="total">Total</h3>
					<h3 className="total">{formatPrice(total)}</h3>
				</div>
			</div>
		</div>
	) : (
		renderEmpty()
	);
};

export default Checkout;
