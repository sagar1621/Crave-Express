import { useState,useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext.js";
import {useSelector} from "react-redux";
import Logo from '../img/logo.png';

const Title = () => {
  return (
    <a href="/">
      <img
        className="h-28 p-2"
        src={Logo}
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
            {/* <li className="px-2 hover:underline hover:underline-offset-4">Cart{cartItems.length}</li> */}
            <div className="relative group">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-white group-hover:text-gray-400"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M3 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v2H3V4zm-1 3a2 2 0 1 1 4 0v9a1 1 0 0 0 2 0v-9a2 2 0 0 1-4 0zm13-2h1V4a3 3 0 0 0-6 0v1h6zm-8 15a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
              />
            </svg>
            {cartItems.length > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {cartItems.length}
              </span>
            )}
          </div>
          </Link>
          
        </ul>
      </div>
    </div>
  );
};

export default Header;
