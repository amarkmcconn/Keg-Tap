import React from "react";
import PropTypes from "prop-types";

function Keg(props){
  return (
    <React.Fragment>
       <div onClick = {() => props.whenKegClicked(props.id)}>
        <h3>Beer: {props.name}</h3>
        <p>Brewery: {props.brand}</p>
        <p>Price ${props.price}</p>
        <p>ABV: {props.alcohol}</p>
        <hr/>
      </div>
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.string,
  alcohol: PropTypes.string,
  id: PropTypes.string,
  whenKegClicked: PropTypes.func
};

export default Keg;