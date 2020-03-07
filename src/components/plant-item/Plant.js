import React, { useState, useEffect } from "react";
import "./plant.scss";
import { Link, navigate } from "@reach/router";

const Plant = props => {
	const [data, setData] = useState({});

	const { name, latin, desc, price, img, id, selectedPlant } = props;
	const plant = {
		name,
		latin,
		price,
		desc,
		id,
		img
	};
	const handlePlantClick = id => {
		navigate(`/${id}`);
	};

	return (
		<div className="plant-wrap" onClick={() => handlePlantClick(id)}>
			<img src={img} alt={name} />
			<div className="plant-info">
				<h3 className="name">{name}</h3>
				<h4>{price}</h4>
			</div>
		</div>
	);
};

export default Plant;
