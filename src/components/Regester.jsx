import { Button, Label, TextInput } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

const Regester = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center mt-10 mb-5">Register Page</h1>

      <form className="lg:w-[30%] mx-auto flex flex-col gap-4 p-5 lg:p-0">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="name1" value="Your Name" />
          </div>
          <TextInput
            id="name1"
            type="text"
            placeholder="Jon David"
            required={true}
            shadow={true}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email2" value="Your email" />
          </div>
          <TextInput
            id="email2"
            type="email"
            placeholder="name@flowbite.com"
            required={true}
            shadow={true}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password2" value="Your password" />
          </div>
          <TextInput
            id="password2"
            type="password"
            required={true}
            shadow={true}
          />
        </div>

        <p>
          Already have an account? 
          <Link className="text-orange-500" to="/login">
            Login
          </Link>
        </p>

        <Button className="w-[50%] mx-auto" gradientDuoTone="pinkToOrange">
          Register
        </Button>
      </form>
    </div>
  );
};

export default Regester;
