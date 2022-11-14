import React from "react";
import "./Cart.css";

const Cart = ({ cart, setCart, handlerRemoveItem2 }) => {
  const handlerRemoveItem = (id) => {
    const rest = cart.filter((shirt) => shirt._id !== id);
    setCart(rest);
  };

  let message;
  if (cart.length === 0) {
    message = (
      <small>
        <i>
          <b>Please buy at least one item</b>
        </i>
      </small>
    );
  } else {
    message = (
      <p>
        <small>
          <i>
            <b>Thanks for buying</b>
          </i>
        </small>
      </p>
    );
  }
  return (
    <div>
      <h1 className={cart.length === 2 ? "orange" : "purple"}>
        this is cart container
      </h1>
      <p className={`bold orangered ${cart.length === 4 ? "blue" : "yellow"}`}>
        Added : {cart.length}
      </p>
      {cart.map((tshirt) => (
        <p key={tshirt._id}>
          {tshirt.name}
          <button
            onClick={() => handlerRemoveItem(tshirt._id)}
            className="border border-black bg-gray-400 text-white"
          >
            X
          </button>
          <button
            onClick={() => handlerRemoveItem2(tshirt)}
            className="border border-black bg-gray-400 text-white"
          >
            X
          </button>
        </p>
      ))}
      {message}
      {cart.length === 3 ? <p>tinjon ke gift diba</p> : <p>kino kino</p>}
      {cart.length === 2 && <h2>Double item</h2>}
    </div>
  );
};

export default Cart;

/* 
Conditional Rendaring
1. use element in a variable and then use if-else to set value.
2. ternary operation ==> condition ? true : false.
3. && oparetor ==> !cart.length &&  'product container'(if condition is true, i want to display someting )
4. || operator (if condition is false, i want to display something )
*/
