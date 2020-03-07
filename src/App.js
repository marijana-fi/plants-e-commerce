import React, { useState } from "react";
import SamplePlants from "./components/sample-plants/SamplePlants";
import "./App.scss";
import Header from "./components/header/Header";
import PlantsList from "./components/plants-list/PlantsList";
import { Router } from "@reach/router";
import SingleProductPage from "./components/single-product-page/SingleProductPage";
import Cart from "./components/cart/Cart";

function App() {
	const [plants, setPlants] = useState(SamplePlants);
	const [plant, setPlant] = useState({});
	const [cart, setCart] = useState(false);

	const openCart = () => {
		setCart(true);
		console.log(cart);
	};
	const closeCart = () => {
		setCart(false);
		console.log(cart);
	};
	const selectedPlant = plant => {
		setPlant(plant);
	};

	// loadPlants = () => {
	// 	setPlants({ plants: SamplePlants });
	// };
	return (
		<div>
			<Header openCart={openCart} />
			<Router>
				<PlantsList
					path="/"
					plants={plants}
					selectedPlant={selectedPlant}
				/>
				<SingleProductPage
					path="/:id"
					plant={plant}
					openCart={openCart}
				/>
			</Router>
			<Cart plant={plant} cart={cart} closeCart={closeCart} />
		</div>
	);
}

export default App;
