import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="bg-black text-white text-center h-auto flex justify-evenly items-center">
        <div>
          <img
            className="w-56 h-20 b rounded-lg my-5"
            src="https://i.ibb.co/KV9PFtW/apple1.jpg"
            alt="google"
          />
          <img
            className="w-56 h-20 b rounded-lg mb-3"
            src="https://i.ibb.co/ZWkxKzk/google.png"
            alt="App store"
          />
        </div>

        <p className="font-bold pt-4">MD Sakib © 2023 All rights reserved</p>

        <div>
          <i className="fa-brands fa-facebook text-5xl mr-8 hover:text-blue-600"></i>
          <i className="fa-brands fa-twitter text-5xl mr-8 hover:text-blue-500"></i>
          <i className="fa-brands fa-instagram text-5xl mr-8 hover:text-orange-600"></i>
          <i className="fa-brands fa-linkedin text-5xl hover:text-blue-500"></i>
        </div>
      </div>
    </div>
  );
};

export default Footer;
