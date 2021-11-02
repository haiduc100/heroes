import React from "react";
import "./Detail.css";

const Detail = () => {
  return (
    <div>
      <h2> Details</h2>
      <div>
        <span>id: </span>
      </div>
      <div>
        <label htmlFor="hero-name">Hero name: </label>
        <input id="hero-name" placeholder="name" />
      </div>
    </div>
  );
};

export default Detail;
