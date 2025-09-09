import React from 'react';
import '../styles/bottom-nav.css';
import { Link } from 'react-router-dom';

function BottomNav() {
  return (
    <nav className="bottom-nav">
      <Link to="/">Home</Link>
      <Link to="/saved">Saved</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/create-food">Create Food</Link>
    </nav>
  );
}

export default BottomNav;
