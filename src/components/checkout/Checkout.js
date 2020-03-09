import React, { useContext } from "react";
import "./checkout.scss";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import PaymentForm from "../payment-form/PaymentForm";
import CartPlantItem from "../cart-plant-item/CartPlantItem";
import { CartContext } from "./../../context/CartContext";
import { formatPrice } from "./../../helpers";

const stripePromise = loadStripe("pk_test_BLj4krRrl37dHt7q5Sbk2klf00W1ckUZfZ");
const Checkout = ({ plants }) => {
	const { cart } = useContext(CartContext);
	const orders = Object.keys(cart);

	let total = 0;

	if (orders.length) {
		total = orders.reduce((prevTotal, key) => {
			const plant = plants[key];
			const quantity = cart[key];
			return prevTotal + plant.price * quantity;
		}, 0);
	}
	return (
		<div className="container">
			<div className="contact-wrap">
				<div className="info">
					<h2 className="info-title">Billing information</h2>
					<div className="contact-info">
						<div className="label-input">
							<label className="label" htmlFor="first-name">
								First Name
							</label>
							<input type="text" id="first-name" />
						</div>
						<div className="label-input">
							<label htmlFor="last-name">Last Name</label>
							<input type="text" id="last-name" />
						</div>
					</div>
					<div className="contact-info">
						<div className="label-input">
							<label className="label" htmlFor="country">
								Country
							</label>
							<input type="text" id="country" />
						</div>
						<div className="label-input">
							<label htmlFor="city">City</label>
							<input type="text" id="city" />
						</div>
					</div>
				</div>
				<Elements stripe={stripePromise}>
					<PaymentForm />
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
	);
};

export default Checkout;
