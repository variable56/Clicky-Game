import React from "react";
import "./style.css";

function Jumbo() {
  return (
    <div className="jumbotron jumbotron-fluid text-center">
  <div className="container">
    <h1 className="display-4">React Memory Game</h1>
    <p className="lead">This is a simple demonstration for React components, handlers and properties. Click on each image to change the state of each dancer.</p>
  </div>
</div>
  );
}

export default Jumbo;