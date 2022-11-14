import React from "react";
import Cousin from "../Cousin/Cousin";

const Aunty = ({ house }) => {
  return (
    <div>
      <h2>Aunty</h2>
      <section className="grid2">
        <Cousin house={house}></Cousin>
        <Cousin house={house}></Cousin>
        <Cousin house={house}></Cousin>
        <Cousin house={house}></Cousin>
      </section>
    </div>
  );
};

export default Aunty;
