import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="mb-10 text-white bg-blue-400 p-10">
      <Link className="ml-10 font-semibold" to="/">
        Home
      </Link>
      <Link className="ml-10 font-semibold" to="/orders">
        Orders
      </Link>
      <Link className="ml-10 font-semibold" to="/grandpa">
        Grandpa
      </Link>
      <Link className="ml-10 font-semibold" to="/about">
        About
      </Link>
    </div>
  );
};

export default Header;
