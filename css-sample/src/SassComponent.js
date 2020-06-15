import React from "react";
import "./SassComponent.scss";

const SassComponent = () => {
  return (
    <div className="SassComponent">
      <div className="box red"></div>
      <div className="box orange" />
      <div className="box yellow" />
      <div className="box green"></div>
      <div className="box blue"></div>
      <div className="box indigo" />
      <div className="box violet" />
    </div>
  );
};

export default SassComponent;
