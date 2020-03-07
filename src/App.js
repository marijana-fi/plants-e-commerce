import React, { useState } from "react";
import SamplePlants from "./SamplePlants";
import "./App.scss";
import Header from "./components/header/Header";
import PlantsList from "./components/plants-list/PlantsList";
import { Router } from "@reach/router";
import SingleProductPage from "./components/single-product-page/SingleProductPage";
import Cart from "./components/cart/Cart";

function App() {
	const [plants, setPlants] = useState(SamplePlants);
	const [cart, setCart] = useState(false);

	const openCart = () => {
		setCart(true);
		console.log(cart);
	};
	const closeCart = () => {
		setCart(false);
		console.log(cart);
	};

	return (
		<div>
			<Header openCart={openCart} />
			<Router>
				<PlantsList path="/" plants={plants} />
				<SingleProductPage path="/:id" openCart={openCart} />
			</Router>
			<Cart cart={cart} closeCart={closeCart} />
		</div>
	);
}

export default App;
