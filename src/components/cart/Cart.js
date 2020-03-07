import React from "react";
import Counter from "../counter/Counter";
import "./cart.scss";

const Cart = ({  cart, closeCart }) => {

	
	const { name, latin, price, img } = plant;

	const handleCloseClick = () => {
		closeCart();
	};

	return (
		<div className={cart ? "cart-modal active" : "cart-modal"}>
			<aside className="cart">
				<div className="cart-header">
					<h3 className="cart-title">Cart</h3>
					<button className="cart-close" onClick={handleCloseClick}>
						&times;
					</button>
				</div>
				<div className="item-wrap">
					<img className="item-img" src={img} alt={name} />

					<div className="item-info">
						<div className="item-text">
							<h2 className="name">{name}</h2>
							<h3 className="price">{price}</h3>
						</div>
						<div className="count-wrap">
							<Counter />
							<div className="delete-item">
								<img src="./img/trash-icon.svg" alt="" />
							</div>
						</div>
					</div>
				</div>

				<div className="cart-total">
					<h3>Total</h3>
					<h3>$00.00</h3>
				</div>
				<button className="cart-checkout">Checkout</button>
			</aside>
		</div>
	);
};

export default Cart;
