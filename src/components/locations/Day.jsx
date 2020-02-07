import React from "react";
import PropTypes from "prop-types";


function Day(props){
  return (
    <div>
      <style jsx global>{`
          .day {
            text-transform: uppercase;
            color: grey;
            font-family: sans-serif;
            padding-top: 15px;
            padding-bottom: 5px;
          }
          .location {
            color:black;
          }
          .box {
            display: inline-block;
            float: left;
            width: 350px;
            font-family: sans-serif;
            line-height:.25;
            border: 1px solid blue;
            padding:10px;
            margin-right:20px;
          }
      `}</style>
    <h3 className="day">{props.dayofweek}</h3>
        <h3 className="location"><em>{props.location}</em></h3>
        <h4>Booth: {props.booth}</h4>
        <p>hours: <em>{props.hours}</em></p>
        <hr/>
    </div>
  );
}

Day.propTypes = {
  dayofweek: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  booth: PropTypes.string.isRequired,
  hours: PropTypes.string.isRequired
};

export default Day;
