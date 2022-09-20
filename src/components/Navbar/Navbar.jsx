import React from 'react';
import { FaConfluence } from 'react-icons/fa';
import './Navbar.css';

export const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="nav-logo">
        <FaConfluence /> <span>Dev:T</span>
      </div>
      <div className="nav-links">
        <a href="/home">Home</a>
        <a href="/about">About</a>
        <a href="/about">Contact</a>
      </div>
    </div>
  );
};
