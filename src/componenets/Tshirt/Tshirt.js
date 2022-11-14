import React from "react";
import "./Tshirt.css";

const Tshirt = ({ tshirt, handler }) => {
  const { price, picture, name, _id, index, gender } = tshirt;
  return (
    <div className="t-shirt">
      <img src={picture} alt="" />
      <div>
        <h1>{name}</h1>
        <p>Price :{price}</p>
        <button className="buy-btn" onClick={() => handler(tshirt)}>
          Buy
        </button>
      </div>
    </div>
  );
};

export default Tshirt;
