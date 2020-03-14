const express = require("express");
const router = express.Router();

const stripe = require("stripe")("sk_test_CMof4JqoD0lorTog6iqGL4b700DAypVrB0");

// router.get("/public-key", (req, res) => {
// 	res.send({ publicKey: process.env.STRIPE_PUBLISHABLE_KEY });
// });

// router.get("/product-details", (req, res) => {
// 	let data = getProductDetails();
// 	res.send(data);
// });
router.post("/create-payment-intent", async (req, res) => {
	const body = req.body;
	const productDetails = getProductDetails();

	const options = {
		...body,
		amount: req.body.amount,
		currency: productDetails.currency
	};

	console.log(body);

	try {
		const paymentIntent = await stripe.paymentIntents.create(options);
		res.json(paymentIntent);
	} catch (err) {
		res.json(err);
	}
});

let getProductDetails = () => {
	return { currency: "usd", amount: 900 };
};

module.exports = router;
