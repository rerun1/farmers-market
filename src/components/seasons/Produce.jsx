import React from "react";
import PropTypes from "prop-types";
import Crops from "./Crops.jsx";

var availableProduce = [
   {
      month: "January",
      selection: [
         "Apples",
         "Hazelnuts",
         "Pears",
         "Garlic",
         "Mushrooms",
         "Onions",
         "Potatoes",
         "Turnips"
      ]
   },
   {
      month: "February",
      selection: [
         "Turnips",
         "Hazelnuts",
         "Pears",
         "Garlic",
         "Mushrooms",
         "Onions",
         "Potatoes",
         "Turnips"
      ]
   }
];

function Produce(props){
  return (
    <div>
      <h3>{props.month}</h3>
      <p><em>Crops available:</em></p>
      {availableProduce.map((crops,index)=>
        <Crops
          selection={crops.selection}
          key={index}
        />
      )}
    </div>
  );
}

Produce.propTypes = {
  month: PropTypes.string.isRequired
}

export default Produce;
