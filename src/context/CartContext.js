import React, { createContext, Component } from "react";
import Plant from "./../components/plant-item/Plant";
export const CartContext = createContext();

class CartContextProvider extends Component {
	state = {
		isOpen: false,
		cart: {}
	};

	toggleCart = () => {
		this.setState({ isOpen: !this.state.isOpen });
	};

	updateCart = (key, count) => {
		const cart = { ...this.state.cart };
		cart[key] = cart[key] + count || count;

		this.setState({ cart }, () => {});
	};

	removeFromCart = key => {
		const cart = { ...this.state.cart };
		delete cart[key];
		this.setState({ cart });
	};

	render() {
		return (
			<CartContext.Provider
				value={{
					...this.state,
					toggleCart: this.toggleCart,
					updateCart: this.updateCart,
					removeFromCart: this.removeFromCart
				}}
			>
				{this.props.children}
			</CartContext.Provider>
		);
	}
}

export default CartContextProvider;
