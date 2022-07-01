/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import tapRoom from "./../img/logo.png"
import tapRoom1 from './../img/Image3.jpg'

function Header(){
  return (
    <React.Fragment>
      <img class="center" src = {tapRoom} /> <br></br>
      <img class="center" src = {tapRoom1} />
    </React.Fragment>
  );
}

export default Header;