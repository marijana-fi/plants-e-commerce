import React from "react";
import Plant from "../plant-item/Plant";
import "./plants-list.scss";

const PlantsList = props => {
	const { plants, selectedPlant } = props;

	return (
		<div className="plants-list">
			{Object.keys(plants).map(key => {
				return <Plant details={plants[key]} key={key} plantId={key} />;
			})}
		</div>
	);
};

export default PlantsList;
