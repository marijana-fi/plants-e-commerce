import React, { createContext, Component } from "react";
import Plant from "./../components/plant-item/Plant";
export const CartContext = createContext();

class CartContextProvider extends Component {
	state = {
		isOpen: false,
		cart: []
	};

	toggleCart = () => {
		this.setState({ isOpen: !this.state.isOpen });
	};

	updateCart = plant => {
		this.setState({ cart: [...this.state.cart, plant] }, () => {
			console.log(this.state.cart);
		});
	};

	render() {
		return (
			<CartContext.Provider
				value={{
					...this.state,
					toggleCart: this.toggleCart,
					updateCart: this.updateCart
				}}
			>
				{this.props.children}
			</CartContext.Provider>
		);
	}
}

export default CartContextProvider;
