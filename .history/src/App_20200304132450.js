import React, { useState } from "react";
import SamplePlants from "./components/sample-plants/SamplePlants";
import "./App.scss";
import Header from "./components/header/Header";
import SingleProductPage from "./components/single-product-page/SingleProductPage";

function App() {
	const [plants, setPlants] = useState(SamplePlants);
	return (
		<div>
			<Header />

			<SingleProductPage />
		</div>
	);
}

export default App;
