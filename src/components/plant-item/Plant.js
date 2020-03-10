import React from "react";
import "./plant.scss";
import { navigate, Link } from "@reach/router";
import { formatPrice } from "../../helpers";
const Plant = ({ details, plantId }) => {
	const { name, price, imgSmall, id } = details;

	const handlePlantClick = id => {
		navigate(`/${id}`);
	};

	return (
		<Link to={`/${id}`}>
			<div className="plant-wrap" onClick={() => handlePlantClick(id)}>
				<div className="img-wrap">
					<img className="plant-img" src={imgSmall} alt={name} />
				</div>

				<div className="plant-info">
					<h3 className="name">{name}</h3>
					<h4 className="price">{formatPrice(price)}</h4>
				</div>
			</div>
		</Link>
	);
};

export default Plant;
