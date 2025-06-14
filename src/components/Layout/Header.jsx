import React from "react";
import { Link } from "react-router-dom";
import SocialIcons from "../UI/SocialIcons";
import "../../styles/Header.css";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link
          to="/"
          className="text-2xl font-bold text-gray-800 hover:text-blue-600 transition"
        >
          Hemil Web Studio
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link
                to="/about"
                className="text-gray-600 hover:text-blue-600 transition"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/portfolio"
                className="text-gray-600 hover:text-blue-600 transition"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-gray-600 hover:text-blue-600 transition"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <SocialIcons />
      </div>
    </header>
  );
};

export default Header;
