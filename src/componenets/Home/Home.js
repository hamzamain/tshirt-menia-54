import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";
import Tshirt from "../Tshirt/Tshirt";
import "./Home.css";

const Home = () => {
  const tShirts = useLoaderData();
  const [cart, setCart] = useState([]);
  const handlerAddToCart = (tShirt) => {
    console.log(tShirt);

    const exist = cart.find((ts) => ts._id === tShirt._id);
    if (exist) {
      alert("this tShirt is allready exist");
    } else {
      const newCart = [...cart, tShirt];
      setCart(newCart);
    }

    console.log(cart);
  };

  const handlerRemoveItem2 = (tshirt) => {
    console.log(tshirt);
    const remaining = cart.filter((ts) => ts._id !== tshirt._id);
    setCart(remaining);
  };
  // console.log(tShirts);
  return (
    <div className="home-container">
      <div className="t-shirt-container">
        {tShirts.map((tshirt) => (
          <Tshirt
            key={tshirt._id}
            tshirt={tshirt}
            handler={handlerAddToCart}
          ></Tshirt>
        ))}
      </div>
      <div className="cart-container">
        <Cart
          cart={cart}
          setCart={setCart}
          handlerRemoveItem2={handlerRemoveItem2}
        ></Cart>
      </div>
    </div>
  );
};

export default Home;
