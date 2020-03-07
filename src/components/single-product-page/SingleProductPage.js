import React, { useState, useEffect } from "react";
import Counter from "../counter/Counter";
import SamplePlants from "../../SamplePlants";
import "./single-product-page.scss";

const SingleProductPage = ({ openCart, id }) => {
	const filtered = SamplePlants.filter(plant => plant.id === +id);
	const [data, setData] = useState(filtered[0]);

	const handleButtonClick = () => {
		openCart();
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
