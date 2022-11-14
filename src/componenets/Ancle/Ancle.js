import React, { useContext } from "react";
import Cousin from "../Cousin/Cousin";
import { MoneyContext } from "../Grandpa/Grandpa";

const Ancle = ({ house }) => {
  const [money, setMoney] = useContext(MoneyContext);
  return (
    <div>
      <h2>Ancle</h2>
      <p>
        <small>
          <b>Money: {money}</b>
        </small>
      </p>
      <section className="grid2">
        <Cousin house={house}></Cousin>
        <Cousin house={house}></Cousin>
        <Cousin house={house}></Cousin>
        <Cousin house={house}></Cousin>
        <Cousin house={house}></Cousin>
        <Cousin house={house}></Cousin>
        <Cousin house={house}></Cousin>
        <Cousin house={house}></Cousin>
        <Cousin house={house}></Cousin>
        <Cousin house={house}></Cousin>
      </section>
    </div>
  );
};

export default Ancle;
