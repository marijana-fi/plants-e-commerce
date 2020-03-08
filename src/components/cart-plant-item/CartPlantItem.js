import React, { useState, useContext } from "react";
import Counter from "../counter/Counter";
import { CartContext } from "./../../context/CartContext";
import { formatPrice } from "../../helpers";
import "./cart-plant-item.scss";

function CartPlantItem({ details, plantId }) {
	const { name, img, price, id } = details;
	const { cart, removeFromCart } = useContext(CartContext);

	const handleClick = () => {
		removeFromCart(plantId);
	};
	return (
		<div>
			<div className="item-wrap">
				<img className="item-img" src={img} alt={name} />

				<div className="item-info">
					<div className="item-text">
						<h2 className="name">{name}</h2>
						<button className="delete-item" onClick={handleClick}>
							<img src="./img/trash-icon.svg" alt="" />
						</button>
					</div>
					<div className="count-wrap">
						<h4 className="qty">
							Quantity: <span>{cart[plantId]}</span>
						</h4>
						<h3 className="price">
							{formatPrice(price * cart[plantId])}
						</h3>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CartPlantItem;
