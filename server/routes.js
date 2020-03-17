const env = require("dotenv").config({ path: "../env" });
const stripe = require("stripe")(YOUR_SECRET_KEY);
const express = require("express");
const router = express.Router();

router.post("/create-payment-intent", async (req, res) => {
	const body = req.body;

	const options = {
		...body,
		amount: req.body.amount,
		currency: "USD"
	};

	try {
		const paymentIntent = await stripe.paymentIntents.create(options);
		res.json(paymentIntent);
	} catch (err) {
		res.json(err);
	}
});

module.exports = router;
