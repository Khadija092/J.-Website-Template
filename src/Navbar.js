import React from 'react';
import { Link } from 'react-router-dom';

function Navbar1() {
  return (
    <div className="container-fluid sticky top-[40px] z-40 bg-white ">
      <div className="row">
        <div className="col-xs-1 col-md-1 col-lg-1 col-xl-1 col-12"></div>
        <div className="col-xs-10 col-md-10 col-lg-10 col-xl-10 col-12">
          <nav className="navbar navbar-light ">
         
            <Link to="/new-arrivals" className="navbar-brand">
              New Arrivals
            </Link>
            <Link to="/cast-and-crew" className="navbar-brand">
              Cast & Crew
            </Link>
            <Link to="/women" className="navbar-brand">
              Women
            </Link>
            <Link to="/men" className="navbar-brand">
              Men
            </Link>
            <Link to="/boysandgirls" className="navbar-brand">
              Boys & Girls
            </Link>
            <Link to="/fragrances" className="navbar-brand">
              Fragrances
            </Link>
            <Link to="/makeup" className="navbar-brand">
              Makeup
            </Link>
            <Link to="/skin-care" className="navbar-brand">
              Skin Care
            </Link>
          </nav>
        </div>
        <div className="col-xs-1 col-md-1 col-lg-1 col-xl-1 col-12"></div>
      </div>
    </div>
  );
}

export default Navbar1;


