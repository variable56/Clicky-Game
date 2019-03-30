import React from "react";
import "./style.css";



// class Nav extends React.Component 
function Nav (props)

  // constructor(props){
  //   super(props)
  // }
    
   {
  return (
    <nav className="bg-dark navbar-fixed-top">
      <div className="navbar-text text-light p-4">React Memory Game</div>
      <div className="navbar-text text-light p-4">Score: {props.score}</div>
    </nav>
  );
}

export default Nav;