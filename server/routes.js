const env = require("dotenv").config();
const stripe = require("stripe")(process.env.REACT_APP_STRIPE_SECRET_KEY);
const express = require("express");
const router = express.Router();

router.get("/test", (req, res) => {
	res.json({
		hello: "hi!",
	});
});

router.post("/", async (req, res) => {
	const body = req.body;

	const options = {
		...body,
		amount: req.body.amount,
		currency: "USD",
	};

	try {
		const paymentIntent = await stripe.paymentIntents.create(options);
		res.json(paymentIntent);
	} catch (err) {
		res.json(err);
	}
});

module.exports = router;
