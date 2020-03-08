import React, { useState, useContext } from "react";
import Counter from "../counter/Counter";
import { CartContext } from "./../../context/CartContext";
import { formatPrice } from "../../helpers";

function CartPlantItem({ details, plantId }) {
	const { name, img, price, itemCount } = details;
	const { cart } = useContext(CartContext);

	return (
		<div>
			<div className="item-wrap">
				<img className="item-img" src={img} alt={name} />

				<div className="item-info">
					<div className="item-text">
						<h2 className="name">{name}</h2>
						<h3 className="price">
							{formatPrice(price * cart[plantId])}
						</h3>
					</div>
					<div className="count-wrap">
						<h5>Quantity {cart[plantId]}</h5>
						<div className="delete-item">
							<img src="./img/trash-icon.svg" alt="" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CartPlantItem;
