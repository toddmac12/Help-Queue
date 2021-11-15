import React from "react";
import ticketsImage from "./../img/tickets.png";
function Header(){
  return (
    <React.Fragment>
      <img src={ticketsImage} alt="An image of tickets" />
      <h1></h1>
    </React.Fragment>
  );
}

export default Header;