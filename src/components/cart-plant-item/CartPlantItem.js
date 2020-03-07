import React, { useState } from "react";
import Counter from "../counter/Counter";
function CartPlantItem({ name, img, price, itemCount }) {
	const [count, setCount] = useState(itemCount);

	const decrementCount = () => {
		setCount(count === 1 ? 1 : count - 1);
	};
	const incrementCount = () => {
		setCount(count + 1);
	};
	return (
		<div>
			<div className="item-wrap">
				<img className="item-img" src={img} alt={name} />

				<div className="item-info">
					<div className="item-text">
						<h2 className="name">{name}</h2>
						<h3 className="price">{price}</h3>
					</div>
					<div className="count-wrap">
						<Counter
							count={count}
							decrementCount={decrementCount}
							incrementCount={incrementCount}
						/>
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
