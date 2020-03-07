import React, { useState, useEffect } from "react";
import "./single-product-page.scss";
import Counter from "../counter/Counter";

const SingleProductPage = ({ plant, openCart }) => {
	const { name, latin, price, desc, img } = plant;

	// 	const {plantDetails, setPlantDetails} = useState({})
	// 	console.log(plant);
	// useEffect (() => {
	// 		setPlantDetails({plant})
	// 	}, [{plant}]);
	const handleButtonClick = () => {
		openCart();
	};
	return (
		<div className="single-product">
			<div className="product-img">
				<img src={img} alt={name} />
			</div>
			<div className="product-info">
				<h1 className="name">{name}</h1>
				<h5 className="latin">{latin}</h5>
				<h3 className="price">{price}</h3>
				<h4 className="desc">Size</h4>
				<p className="desc">{desc}</p>

				<div className="btn-wrap">
					<Counter />
					<button className="btn" onClick={handleButtonClick}>
						{" "}
						Add to cart
					</button>
				</div>
			</div>
		</div>
	);
};

export default SingleProductPage;
