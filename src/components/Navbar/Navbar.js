import React from 'react';
import { Link } from 'react-router-dom';
import data from '../../data/data.json';
import { CiSearch } from "react-icons/ci";
import './Navbar.css';

const Navbar = () => {
  const { logo } = data;

  return (
    <div className="nav">
      <div className="logo">
        <Link to="/">
          <img id="logoImage" src={logo} alt="Not" />
        </Link>
      </div>

      <Link className="navlinks" to="/miphones">
        Mi Phones
      </Link>
      <Link className="navlinks" to="/redmiphones">
        Redmi Phones
      </Link>
      <Link className="navlinks" to="/tv">
        TV
      </Link>
      <Link className="navlinks" to="/laptops">
        Laptops
      </Link>
      <Link className="navlinks" to="/fitness-and-lifestyle">
        Fitness & Lifestyle
      </Link>
      <Link className="navlinks" to="/home">
        Home
      </Link>
      <Link className="navlinks" to="/audio">
        Radio
      </Link>
      <Link className="navlinks" to="/accessories">
        Accessories
      </Link>

      <div className="searchbox">
        <input type="text" name="search" placeholder="Search Products" />
        <CiSearch />
      </div>
    </div>
  );
};

export default Navbar;
