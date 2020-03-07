import React, { useState } from "react";
import "./counter.scss";

const Counter = ({ incrementCount, decrementCount, count }) => {
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
