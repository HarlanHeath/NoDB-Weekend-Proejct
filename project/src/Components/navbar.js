import React from "react";

const NavBar = props => {
  console.log(props);
  return (
    <div>
      {/* <button />Main<button>Fav</button> */}
      {/* <button onClick={() => props.thanManTron("I'm a good boi")}> this is a method coming from props */}{" "}
      <input onChange={e => props.thanManTron(e.target.value)} />
      Thanosify {/* </button> */}
    </div>
  );
};

export default NavBar;
