import React from "react";
import { Button, Navbar } from "flowbite-react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="sticky top-0 z-10">
      <Navbar fluid={true} rounded={true}>
        <Navbar href="https://flowbite.com/">
          <img
            src="https://thumbs.dreamstime.com/z/thai-food-restaurant-logo-design-7559128.jpg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Thai<span className="text-orange-500">Food</span>Corner
          </span>
        </Navbar>
        <div className="flex md:order-2">
          <Link to="/login">
            <Button gradientDuoTone="pinkToOrange">Login</Button>
          </Link>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "text-orange-600 font-bold" : "")}
          >
            Home
          </NavLink>
          <NavLink to="/blog" className={({ isActive }) => (isActive ? "text-orange-600 font-bold" : "")}>
              Blog
          </NavLink>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
