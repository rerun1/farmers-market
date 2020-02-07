import React from "react";
import PropTypes from "prop-types";

function Crops(props) {
  return(
    <div>
      <p>{props.selection}</p>
    </div>
  );
}

Crops.propTypes = {
  selection: PropTypes.array.isRequired
}

export default Crops;
