import React, { useState, useEffect, useContext } from "react";
import Counter from "../counter/Counter";
import SamplePlants from "../../SamplePlants";
import "./single-product-page.scss";
import { CartContext } from "./../../context/CartContext";
import { formatPrice } from "../../helpers";

const SingleProductPage = ({ id }) => {
	const [count, setCount] = useState(1);
	const { isOpen, toggleCart, cart, updateCart } = useContext(CartContext);

	const decrementCount = () => {
		setCount(count === 1 ? 1 : count - 1);
	};
	const incrementCount = () => {
		setCount(count + 1);
	};

	const filtered = Object.values(SamplePlants).filter(
		plant => plant.id === +id
	);
	const filteredKey = Object.keys(SamplePlants).filter(key =>
		key.includes(id)
	);
	const [data, setData] = useState(filtered[0]);

	const handleButtonClick = () => {
		setCount(1);
		updateCart(filteredKey, count);
		toggleCart();
	};
	return (
		<div className="single-product">
			<div className="product-img">
				<img className="image" src={data.img} alt={data.name} />
			</div>
			<div className="product-info">
				<h1 className="name">{data.name}</h1>
				<h5 className="latin">{data.latin}</h5>
				<h3 className="price">{formatPrice(data.price)}</h3>
				<h4 className="desc">Size</h4>
				<p className="desc">{data.desc}</p>

				<div className="btn-wrap">
					<Counter
						count={count}
						decrementCount={decrementCount}
						incrementCount={incrementCount}
					/>
					<button className="btn" onClick={() => handleButtonClick()}>
						Add to cart
					</button>
				</div>
			</div>
		</div>
	);
};

export default SingleProductPage;
