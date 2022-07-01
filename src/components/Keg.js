import React from "react";
import PropTypes from "prop-types";

function Keg(props){
  return (
    <React.Fragment>
      <h3>{props.name}</h3>
      <ul>
        <li>{props.brand}</li>
        <li>{props.price}</li>
        <li>{props.alcoholContent}</li>
      </ul>
      <hr/>
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  alcoholContent: PropTypes.string.isRequired
};

export default Keg;