import React from "react";
// import Nav from "../navbar"
import "./style.css";

class Card extends React.Component {


render() {
  return (
    <div>
      <div className="img-container d-flex container">
        <img alt={this.props.name} src={this.props.image} onClick={() => this.props.handleClick()}/>
      </div>
    </div>
  );
}
}
export default Card;
