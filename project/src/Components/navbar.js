import React from "react";

const NavBar = props => {
  // console.log(props);
  return (
    <div className="header" >
      <button onClick={() => props.switchFavsPage(true)}>
      Home </button>
      <button onClick={() => props.switchFavsPage(false)}>
      Favorites </button>
    </div>
  );
};

export default NavBar;
