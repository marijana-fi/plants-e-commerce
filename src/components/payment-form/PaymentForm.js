import React, { useState, useEffect, useContext } from "react";
import "./payment-form.scss";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import api from "./../../api";

const PaymentForm = ({ total, setSucceeded }) => {
	const stripe = useStripe();
	const elements = useElements();
	const [clientSecret, setClientSecret] = useState(null);
	const [error, setError] = useState(null);
	const [cardCompleted, setCardCompleted] = useState(false);
	const [metadata, setMetadata] = useState(null);

	const [billingDetails, setBillingDetails] = useState({
		email: "",
		phone: "",
		name: "",
		address: "",
	});

	useEffect(() => {
		api.createPaymentIntent({
			payment_method_types: ["card"],
			amount: total,
		})
			.then((clientSecret) => {
				setClientSecret(clientSecret);
			})
			.catch((err) => {
				setError(err.message);
			});
	}, []);

	const handleChange = (event) => {
		setCardCompleted(event.complete);
	};

	const handleSubmit = async (ev) => {
		ev.preventDefault();
		if (!stripe || !elements) {
			return;
		}

		const payload = await stripe.confirmCardPayment(clientSecret, {
			payment_method: {
				card: elements.getElement(CardElement),
				billing_details: billingDetails,
			},
		});

		if (payload.error) {
			setError(`Payment failed: ${payload.error.message}`);
			console.log("[error]", payload.error);
		} else {
			setError(null);
			setSucceeded(true);
			setMetadata(payload.paymentIntent);
			console.log("[PaymentIntent]", payload.paymentIntent);
		}
	};

	return (
		<>
			<form className="form" onSubmit={handleSubmit}>
				<div className="info">
					<h2 className="info-title">Billing information</h2>
					<div className="contact-info">
						<div className="label-input">
							<input
								type="text"
								id="name"
								placeholder="Name"
								required
								onChange={(e) => {
									setBillingDetails({
										...billingDetails,
										name: e.target.value,
									});
								}}
							/>
							<label htmlFor="name">Name</label>
						</div>
						<div className="label-input">
							<input
								type="text"
								id="address"
								placeholder="Address"
								required
								onChange={(e) => {
									setBillingDetails({
										...billingDetails,
										address: e.target.value,
									});
								}}
							/>
							<label htmlFor="address">Address</label>
						</div>
					</div>
					<div className="contact-info">
						<div className="label-input">
							<input
								type="email"
								id="email"
								placeholder="Email"
								required
								onChange={(e) => {
									setBillingDetails({
										...billingDetails,
										email: e.target.value,
									});
								}}
							/>
							<label htmlFor="email">Email</label>
						</div>
						<div className="label-input">
							<input
								type="phone"
								id="phone"
								placeholder="Phone"
								required
								onChange={(e) => {
									setBillingDetails({
										...billingDetails,
										phone: e.target.value,
									});
								}}
							/>
							<label htmlFor="phone">Phone</label>
						</div>
					</div>
				</div>

				<div className="card-info">
					<h2>Payment</h2>
					<label>
						Card Number
						<CardElement
							className="input-field"
							onChange={handleChange}
						/>
					</label>
					{error ? (
						<div className="error message">{error}</div>
					) : null}
				</div>

				<button
					className="btn"
					type="submit"
					disabled={!stripe || !cardCompleted}
				>
					Pay
				</button>
			</form>
		</>
	);
};

export default PaymentForm;
