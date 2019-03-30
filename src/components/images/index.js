import React from "react";
import "./style.css";

function ImgContainer(props) {
  return (<div className="imgcontainer container">{props.children}</div>);
}

export default ImgContainer;