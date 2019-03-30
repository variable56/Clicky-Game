import React from "react";
import "./style.css";

class Card extends React.Component {

render() {
  return (
    <div>
      <div className="img-container d-flex container">
        <img alt={this.props.name} src={this.props.image} />
      </div>
      {/* <span onClick={() => props.removeFriend(props.id)} className="remove">
        𝘅
      </span> */}
    </div>
  );
}
}
export default Card;
