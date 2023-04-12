import { useState,useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext.js";
import {useSelector} from "react-redux";

const Title = () => {
  return (
    <a href="/">
      <img
        className="h-28 p-2"
        src="https://img.freepik.com/free-vector/steam-train-design_1152-67.jpg?w=2000"
        alt="logo"
      />
    </a>
  );
};

const Header = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const {user}=useContext(UserContext);
  const cartItems=useSelector(store=>store.cart.items);

  return (
    <div className="flex justify-between m-2 shadow-lg">
      <Title />
      <div className="nav-items">
        <ul className="py-10 flex text-gray-800 font-bold text-xl">
          <Link to="/">
            <li className="px-2 hover:underline hover:underline-offset-4">Home</li>
          </Link>
          <Link to="/about">
            <li className="px-2 hover:underline hover:underline-offset-4">About</li>
          </Link>
          <Link to="/contact">
            <li className="px-2 hover:underline hover:underline-offset-4">Contact</li>
          </Link>
          <Link to="/cart">
            <li className="px-2 hover:underline hover:underline-offset-4">Cart{cartItems.length}</li>
          </Link>
          
        </ul>
      </div>
    </div>
  );
};

export default Header;
