import React from "react";
import "./payment-form.scss";
import axios from "axios";
import {
	CardNumberElement,
	CardCvcElement,
	CardExpiryElement,
	useStripe,
	useElements
} from "@stripe/react-stripe-js";

const PaymentForm = () => {
	const stripe = useStripe();
	const elements = useElements();

	const handleSubmit = async e => {
		e.preventDefault();
		const { error, paymentMethod } = await stripe.createPaymentMethod({
			type: "card",
			card: elements.getElement(CardNumberElement)
		});
		if (!error) {
			const { id } = paymentMethod;
			try {
				const { data } = await axios.post("/api/charge", {
					id,
					amount: 1000
				});
				console.log(data);
			} catch (error) {
				console.log(error);
			}
		}
	};

	return (
		<form className="form" onSubmit={handleSubmit}>
			<h2>Payment</h2>
			<label>
				Card Number
				<CardNumberElement className="input-field" />
			</label>
			<div className="elements-wrap">
				<label>
					Expiration date
					<CardExpiryElement className="input-field" />
				</label>
				<label htmlFor="">
					CVC
					<CardCvcElement className="input-field" />
				</label>
			</div>
			<button className="btn" type="submit" disabled={!stripe}>
				Pay
			</button>
		</form>
	);
};

export default PaymentForm;
