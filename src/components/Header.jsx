import React from "react";
import { Button, Navbar } from "flowbite-react";

const Header = () => {
  return (
    <div className="w-[90%] mx-auto">
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
          <Button>Get started</Button>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link href="/navbars" active={true}>
            Home
          </Navbar.Link>
          <Navbar.Link href="/navbars">About</Navbar.Link>
          <Navbar.Link href="/navbars">Services</Navbar.Link>
          <Navbar.Link href="/navbars">Pricing</Navbar.Link>
          <Navbar.Link href="/navbars">Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
