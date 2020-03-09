import React, { useState, useEffect } from "react";
import "./plant.scss";
import { navigate } from "@reach/router";
import { formatPrice } from "../../helpers";
const Plant = ({ details, plantId }) => {
	const { name, price, imgSmall, id } = details;

	const handlePlantClick = id => {
		navigate(`/${id}`);
	};

	return (
		<div className="plant-wrap" onClick={() => handlePlantClick(id)}>
			<div className="img-wrap">
				<img className="plant-img" src={imgSmall} alt={name} />
			</div>

			<div className="plant-info">
				<h3 className="name">{name}</h3>
				<h4 className="price">{formatPrice(price)}</h4>
			</div>
		</div>
	);
};

export default Plant;
