import React, { createContext, Component } from "react";

export const CartContext = createContext();

class CartContextProvider extends Component {
	state = {
		isOpen: false,
		cart: {},
		isCartIconHidden: false
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

	hideCartIcon = () => {
		this.setState({ isCartIconHidden: true });
	};
	revealCartIcon = params => {
		this.setState({ isCartIconHidden: false });
	};

	render() {
		return (
			<CartContext.Provider
				value={{
					...this.state,
					toggleCart: this.toggleCart,
					updateCart: this.updateCart,
					removeFromCart: this.removeFromCart,
					hideCartIcon: this.hideCartIcon,
					revealCartIcon: this.revealCartIcon
				}}
			>
				{this.props.children}
			</CartContext.Provider>
		);
	}
}

export default CartContextProvider;
