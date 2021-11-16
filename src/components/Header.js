import React from "react";
import ticketsImage from "./../img/tickets.png";
function Header(){
  return (
    <React.Fragment>
      <img src={ticketsImage} alt="tickets" />
      <h1>Tickets</h1>
    </React.Fragment>
  );
}

export default Header;