import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants}) {

    const renderedPlants = plants.map((plant) => <PlantCard key={plant.id} plant={plant}/>)

  return (
    <ul className="cards">{renderedPlants}</ul>
  );
}

export default PlantList;
