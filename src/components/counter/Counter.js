import React, { useState } from "react";
import "./counter.scss";

const Counter = () => {
	const [count, setCount] = useState(1);

	const decrementCount = () => {
		setCount(count === 1 ? 1 : count - 1);
	};
	const incrementCount = () => {
		setCount(count + 1);
	};
	return (
		<div className="qty-wrap">
			<div className="counter">
				<button className="minus" onClick={decrementCount}>
					-
				</button>
				<span className="qty">{count}</span>
				<button className="plus" onClick={incrementCount}>
					+
				</button>
			</div>
		</div>
	);
};

export default Counter;
