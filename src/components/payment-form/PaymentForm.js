import React, { useState, useEffect, useContext } from "react";
import "./payment-form.scss";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import api from "./../../api";
import { CartContext } from "../../context/CartContext";

const PaymentForm = ({ total }) => {
	const stripe = useStripe();
	const elements = useElements();
	const [clientSecret, setClientSecret] = useState(null);
	const [error, setError] = useState(null);
	const [metadata, setMetadata] = useState(null);
	const [succeeded, setSucceeded] = useState(false);
	const [processing, setProcessing] = useState(false);
	const { cart } = useContext(CartContext);
	console.log(cart);

	const [billingDetails, setBillingDetails] = useState({
		email: "",
		phone: "",
		name: "",
		address: ""
	});

	useEffect(() => {
		api.createPaymentIntent({
			payment_method_types: ["card"],
			amount: total
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
		if (!stripe || !elements) {
			return;
		}

		if (error) {
			elements.getElement("card").focus();
			return;
		}

		const payload = await stripe.confirmCardPayment(clientSecret, {
			payment_method: {
				card: elements.getElement(CardElement),
				billing_details: billingDetails
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
			<div className="success message">
				<h3>Your payment succeeded</h3>
			</div>
		);
	};

	const renderForm = () => {
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
									onChange={e => {
										setBillingDetails({
											...billingDetails,
											name: e.target.value
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
									onChange={e => {
										setBillingDetails({
											...billingDetails,
											address: e.target.value
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
									onChange={e => {
										setBillingDetails({
											...billingDetails,
											email: e.target.value
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
									onChange={e => {
										setBillingDetails({
											...billingDetails,
											phone: e.target.value
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
							<CardElement className="input-field" />
						</label>
					</div>
					<button
						className="btn"
						type="submit"
						disabled={!stripe || processing}
					>
						Pay
					</button>
				</form>

				{error ? (
					<div className="error message">Something went wrong</div>
				) : null}
			</>
		);
	};
	return <div>{succeeded ? renderSuccess() : renderForm()}</div>;
};

export default PaymentForm;
