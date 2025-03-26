import React from "react";
import {
  FaTwitter,
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";

const SocialIcons = () => {
  const socialLinks = [
    {
      icon: FaTwitter,
      href: "https://twitter.com/hemil",
      color: "text-blue-400 hover:text-blue-600",
    },
    {
      icon: FaLinkedinIn,
      href: "https://linkedin.com/in/hemil",
      color: "text-blue-700 hover:text-blue-900",
    },
    {
      icon: FaFacebookF,
      href: "https://facebook.com/hemil",
      color: "text-blue-800 hover:text-blue-900",
    },
    {
      icon: FaInstagram,
      href: "https://instagram.com/hemil",
      color: "text-pink-500 hover:text-pink-700",
    },
  ];

  return (
    <div className="flex space-x-4">
      {socialLinks.map(({ icon: Icon, href, color }, index) => (
        <a
          key={index}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`${color} transition-colors duration-300`}
        >
          <Icon size={20} />
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;
