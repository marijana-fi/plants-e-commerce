import React, { useState, useEffect } from "react";
import "./plant.scss";
import { Link, navigate } from "@reach/router";
import { formatPrice } from "../../helpers";
const Plant = ({ details, plantId }) => {
	const { name, price, img, id } = details;

	const handlePlantClick = id => {
		navigate(`/${id}`);
	};

	return (
		<div className="plant-wrap" onClick={() => handlePlantClick(id)}>
			<img className="plant-img" src={img} alt={name} />
			<div className="plant-info">
				<h3 className="name">{name}</h3>
				<h4 className="price">{formatPrice(price)}</h4>
			</div>
		</div>
	);
};

export default Plant;
