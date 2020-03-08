import React, { useState } from "react";
import SamplePlants from "./SamplePlants";
import "./App.scss";
import Header from "./components/header/Header";
import PlantsList from "./components/plants-list/PlantsList";
import { Router } from "@reach/router";
import SingleProductPage from "./components/single-product-page/SingleProductPage";
import Cart from "./components/cart/Cart";
import CartContextProvider from "./context/CartContext";

function App() {
	const [plants, setPlants] = useState(SamplePlants);

	return (
		<CartContextProvider>
			<Header />
			<Router>
				<PlantsList path="/" plants={plants} />
				<SingleProductPage path="/:id" />
			</Router>
			<Cart plants={plants} />
		</CartContextProvider>
	);
}

export default App;
