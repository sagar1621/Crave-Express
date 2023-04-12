import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="flex flex-col md:flex-row items-center">
          <h2 className="text-lg font-semibold">Food App</h2>
          <p className="mt-2 md:mt-0 md:ml-6">© 2023 All rights reserved</p>
        </div>
        <div className="flex mt-4 md:mt-0">
          <a
            href="#"
            className="hover:text-gray-400 mx-2 transition duration-300"
          >
            About Us
          </a>
          <a
            href="#"
            className="hover:text-gray-400 mx-2 transition duration-300"
          >
            Contact Us
          </a>
          <a
            href="#"
            className="hover:text-gray-400 mx-2 transition duration-300"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="hover:text-gray-400 mx-2 transition duration-300"
          >
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
