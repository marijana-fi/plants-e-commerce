import React from "react";
import Plant from "../plant-item/Plant";
import "./plants-list.scss";

const PlantsList = (props) => {
	const { plants, selectedPlant } = props;

	return (
		<div className="container-list">
			<div className="plants-list">
				{Object.keys(plants).map((key) => {
					return (
						<Plant details={plants[key]} key={key} plantId={key} />
					);
				})}
			</div>
			<footer>
				<h5>
					Content was acquired from{" "}
					<a href="https://www.thesill.com/" className="link">
						thesill.com
					</a>
				</h5>
			</footer>
		</div>
	);
};

export default PlantsList;
