import React, { useContext } from "react";
import Counter from "../counter/Counter";
import "./cart.scss";
import { CartContext } from "../../context/CartContext";
import CartPlantItem from "../cart-plant-item/CartPlantItem";

const Cart = () => {
	const { isOpen, cart, toggleCart } = useContext(CartContext);

	const handleClick = () => {
		toggleCart();
	};
	return (
		<div className={isOpen ? "cart-modal active" : "cart-modal"}>
			<aside className="cart">
				<div className="cart-header">
					<h3 className="cart-title">Cart</h3>
					<button className="cart-close" onClick={handleClick}>
						&times;
					</button>
				</div>
				{cart.map(item => {
					return (
						<CartPlantItem
							name={item.name}
							key={item.id}
							itemCount={item.count}
							price={item.price}
							img={item.img}
						/>
					);
				})}
			</aside>

			{/* <aside className="cart">
				<div className="cart-header">
					<h3 className="cart-title">Cart</h3>
					<button className="cart-close" onClick={handleCloseClick}>
						&times;
					</button>
				</div>
				

				<div className="cart-total">
					<h3>Total</h3>
					<h3>$00.00</h3>
				</div>
				<button className="cart-checkout">Checkout</button>
			</aside> */}
		</div>
	);
};

export default Cart;
