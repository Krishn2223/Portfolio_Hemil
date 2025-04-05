import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <p className="text-gray-600">&copy; 2025 Hemil. All rights reserved.</p>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/about" className="text-gray-600 hover:text-blue-600">
                About
              </Link>
            </li>
            <li>
              <Link
                to="/portfolio"
                className="text-gray-600 hover:text-blue-600"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-gray-600 hover:text-blue-600">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
