import React from "react";
import Plant from "../plant-item/Plant";
import "./plants-list.scss";

const PlantsList = props => {
	const { plants, selectedPlant } = props;
	return (
		<div className="plants-list">
			{plants.map(plant => {
				return (
					<Plant
						name={plant.name}
						latin={plant.latin}
						key={plant.id}
						id={plant.id}
						desc={plant.desc}
						price={plant.price}
						img={plant.img}
					/>
				);
			})}
		</div>
	);
};

export default PlantsList;
