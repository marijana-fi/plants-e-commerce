import React from "react";
import "./counter.scss";

const Counter = ({ incrementCount, decrementCount, count }) => {
	return (
		<div className="qty-wrap">
			<div className="counter">
				<button
					className="minus btn light"
					onClick={decrementCount}
					aria-label="Decrease Quantity"
				>
					-
				</button>
				<span className="qty" aria-label="Quantity">
					{count}
				</span>
				<button
					className="plus btn light"
					onClick={incrementCount}
					aria-label="Increase Quantity"
				>
					+
				</button>
			</div>
		</div>
	);
};

export default Counter;
