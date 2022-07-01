import React from "react";
import PropTypes from "prop-types";

function KegDetail(props){
  const { keg } = props;

  return (
    <React.Fragment>
      <h1>Keg Detail</h1>
      <h3>Beer: {keg.name}</h3>
      <p>Brewery: {keg.brand}</p>
      <p>Price ${keg.price}</p>
      <p>ABV: {keg.alcohol}</p>
      <p>Pints Remaining: {keg.pints}</p>
      { keg.pints > 0 ? <button onClick= {props.removePint}>Pint Served</button> : null}
      <hr/>
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  removePint: PropTypes.func
};

export default KegDetail;