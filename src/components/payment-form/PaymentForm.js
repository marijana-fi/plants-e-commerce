import React, { useState, useEffect } from "react";
import "./payment-form.scss";
import axios from "axios";
import {
	CardNumberElement,
	CardExpiryElement,
	CardCvcElement,
	useStripe,
	useElements
} from "@stripe/react-stripe-js";

import api from "./../../api";

const PaymentForm = () => {
	const stripe = useStripe();
	const elements = useElements();
	const [amount, setAmount] = useState(0);
	const [currency, setCurrency] = useState("");
	const [clientSecret, setClientSecret] = useState(null);
	const [error, setError] = useState(null);
	const [metadata, setMetadata] = useState(null);
	const [succeeded, setSucceeded] = useState(false);
	const [processing, setProcessing] = useState(false);

	useEffect(() => {
		// Step 1: Fetch product details such as amount and currency from
		// API to make sure it can't be tampered with in the client.

		api.getProductDetails().then(productDetails => {
			setAmount(productDetails.amount / 100);
			setCurrency(productDetails.currency);
		});
		// Step 2: Create PaymentIntent over Stripe API
		api.createPaymentIntent({
			payment_method_types: ["card"]
		})
			.then(clientSecret => {
				setClientSecret(clientSecret);
			})
			.catch(err => {
				setError(err.message);
			});
	}, []);

	const handleSubmit = async ev => {
		ev.preventDefault();
		setProcessing(true);

		// Step 3: Use clientSecret from PaymentIntent and the CardElement
		// to confirm payment with stripe.confirmCardPayment()
		const payload = await stripe.confirmCardPayment(clientSecret, {
			payment_method: {
				card: elements.getElement(CardNumberElement),
				billing_details: {
					name: "marko"
				}
			}
		});

		if (payload.error) {
			setError(`Payment failed: ${payload.error.message}`);
			setProcessing(false);
			console.log("[error]", payload.error);
		} else {
			setError(null);
			setSucceeded(true);
			setProcessing(false);
			setMetadata(payload.paymentIntent);
			console.log("[PaymentIntent]", payload.paymentIntent);
		}
	};

	const renderSuccess = () => {
		return (
			<div className="sr-field-success message">
				<h1>Your test payment succeeded</h1>
				<p>View PaymentIntent response:</p>
				<pre className="sr-callout">
					<code>{JSON.stringify(metadata, null, 2)}</code>
				</pre>
			</div>
		);
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
