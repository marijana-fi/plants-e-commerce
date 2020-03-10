import React, { useContext } from "react";

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
		<div className="item-wrap">
			<img className="item-img" src={img} alt={name} />

			<div className="item-info">
				<div className="item-text">
					<h2 className="name">{name}</h2>
					<button className="delete-item" onClick={handleClick}>
						&times;
					</button>
				</div>
				<div className="count-wrap">
					<h4 className="qty">
						Qty: <span>{cart[plantId]}</span>
					</h4>
					<h3 className="price">
						{formatPrice(price * cart[plantId])}
					</h3>
				</div>
			</div>
		</div>
	);
}

export default CartPlantItem;
