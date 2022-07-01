import React from "react";
import { v4 } from 'uuid';
import PropTypes from 'prop-types';


function NewKegForm(props){
  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({
      name: event.target.name.value, 
      brand: event.target.brand.value, 
      price: event.target.price.value,
      alcohol: event.target.alcohol.value, 
      id: v4()
    });
  }
  return (
    <React.Fragment>
       
      <form onSubmit={handleNewKegFormSubmission}>
        <input
          type='text'
          name='name'
          placeholder='Beer Name' />
        <input
          type='text'
          name='brand'
          placeholder='brand' />
        <input
          type='currency'
          name='price'
          placeholder='Enter price' />
        <input
          type='text'
          name='alcohol'
          placeholder='Enter ABV' />
        <button type='submit'>Add new Keg</button>
      </form>
    </React.Fragment>
  );
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegForm;