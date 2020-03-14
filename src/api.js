const createPaymentIntent = options => {
	return window
		.fetch(`http://localhost:8080/create-payment-intent`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(options)
		})
		.then(res => {
			if (res.status === 200) {
				return res.json();
			} else {
				return null;
			}
		})
		.then(data => {
			if (!data || data.error) {
				console.log("API error:", { data });
				throw new Error("PaymentIntent API Error");
			} else {
				return data.client_secret;
			}
		});
};

const getProductDetails = options => {
	return window
		.fetch(`/product-details`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json"
			}
		})
		.then(res => {
			if (res.status === 200) {
				return res.json();
			} else {
				return null;
			}
		})
		.then(data => {
			if (!data || data.error) {
				console.log("API error:", { data });
				throw Error("API Error");
			} else {
				return data;
			}
		});
};
const api = {
	createPaymentIntent,
	getProductDetails: getProductDetails
};

export default api;
