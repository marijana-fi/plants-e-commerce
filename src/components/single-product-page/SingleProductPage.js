import React, { useState, useEffect, useContext } from "react";
import Counter from "../counter/Counter";
import SamplePlants from "../../SamplePlants";
import "./single-product-page.scss";
import { CartContext } from "./../../context/CartContext";

const SingleProductPage = ({ id }) => {
	const [count, setCount] = useState(1);

	const decrementCount = () => {
		setCount(count === 1 ? 1 : count - 1);
	};
	const incrementCount = () => {
		setCount(count + 1);
	};
	const filtered = Object.values(SamplePlants).filter(
		plant => plant.id === +id
	);

	const [data, setData] = useState(filtered[0]);
	const { isOpen, toggleCart, cart, updateCart } = useContext(CartContext);

	const handleButtonClick = (data, count) => {
		const plant = {
			id: data.id,
			name: data.name,
			price: data.price,
			img: data.img,
			count
		};
		updateCart(plant);
		toggleCart();
	};
	return (
		<div className="single-product">
			<div className="product-img">
				<img src={data.img} alt={data.name} />
			</div>
			<div className="product-info">
				<h1 className="name">{data.name}</h1>
				<h5 className="latin">{data.latin}</h5>
				<h3 className="price">{data.price}</h3>
				<h4 className="desc">Size</h4>
				<p className="desc">{data.desc}</p>

				<div className="btn-wrap">
					<Counter
						count={count}
						decrementCount={decrementCount}
						incrementCount={incrementCount}
					/>
					<button
						className="btn"
						onClick={() => handleButtonClick(data, count)}
					>
						{" "}
						Add to cart
					</button>
				</div>
			</div>
		</div>
	);
};

export default SingleProductPage;
