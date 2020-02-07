import React from "react";
import PropTypes from "prop-types";
import Produce from "./Produce";

var months = [
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
         "Apples",
         "Hazelnuts",
         "Pears",
         "Garlic",
         "Mushrooms",
         "Onions",
         "Potatoes"
      ]
   }
];

function Season(props){
  return (
    <div>
      {months.map((produce,index)=>
        <Produce
          month={produce.month}
          key={index}
        />
      )}
      <hr/>
    </div>
  );
}

export default Season;
