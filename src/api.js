const createPaymentIntent = (options) => {
	return window
		.fetch(`https://plants-server.netlify.app/.netlify/functions/server`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(options),
		})
		.then((res) => {
			if (res.status === 200) {
				return res.json();
			} else {
				return null;
			}
		})
		.then((data) => {
			if (!data || data.error) {
				console.log("API error:", { data });
				throw new Error("PaymentIntent API Error");
			} else {
				return data.client_secret;
			}
		});
};

const api = {
	createPaymentIntent,
};

export default api;
