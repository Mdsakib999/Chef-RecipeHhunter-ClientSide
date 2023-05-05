import React, { useContext } from "react";
import { Button, Navbar, Tooltip } from "flowbite-react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handelLogout = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };

  return (
    <div className="sticky top-0 z-10">
      <Navbar fluid={true} rounded={true}>
        <Navbar href="https://flowbite.com/">
          <img
            src="https://i.ibb.co/JR2NF45/logo-1.jpg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Thai<span className="text-orange-500">Food</span>Corner
          </span>
        </Navbar>
        <div className="flex md:order-2">
          {user && (
            <Link>
              <i class="fa-solid fa-user text-4xl mr-4"> </i>
            </Link>
          )}

          {user ? (
            <Button onClick={handelLogout} gradientDuoTone="pinkToOrange">
              Logout
            </Button>
          ) : (
            <Link to="/login">
              <Button gradientDuoTone="pinkToOrange">Login</Button>
            </Link>
          )}

          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-orange-600 font-bold" : ""
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              isActive ? "text-orange-600 font-bold" : ""
            }
          >
            Blog
          </NavLink>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
