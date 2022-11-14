import React, { useContext } from "react";
import Friend from "../Friend/Friend";
import { RingContext } from "../Grandpa/Grandpa";

const Cousin = () => {
  const ring = useContext(RingContext);
  return (
    <div>
      <h4>Cousin</h4>
      <section>
        <Friend></Friend>
      </section>
    </div>
  );
};

export default Cousin;
