import React, { useContext } from "react";
import { RingContext } from "../Grandpa/Grandpa";

const Special = () => {
  const [house, setHouse] = useContext(RingContext);
  return (
    <div>
      <h4>Special</h4>
      <p>House: {house}</p>
      <button
        className="border bg-gray-400 text-white p-1 rounded "
        onClick={() => setHouse(house + 1)}
      >
        Increase
      </button>
    </div>
  );
};

export default Special;
