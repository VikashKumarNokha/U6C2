import React from "react";
 import {Link} from "react-router-dom";
  import { useContext } from "react";
  import { CartContext } from "../../context/CartContext";


// use react-router Link or NavLink
//  const Link = <a />;

const Navbar = () => {
    const {cart} = useContext(CartContext);
  return (
    <div data-cy="navbar">
      <Link data-cy="navbar-home-link" to="/">LOGO</Link>
      <Link to="/products">Products</Link> 
      <span data-cy="navbar-cart-items-count">Cart: { cart/* count here */}</span>
      <button data-cy="navbar-login-logout-button">Login</button>
    </div>
  );
};

export default Navbar;
