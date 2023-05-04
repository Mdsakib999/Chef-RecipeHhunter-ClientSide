import { Button } from "flowbite-react";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

function RegistrationForm() {

  const {createUser} = useContext(AuthContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name, email, password);
    createUser(email, password)
    .then(result => {
      const ceratedUser = result.user;
      console.log(ceratedUser)
    })
    .catch(error => {
      console.log(error);
    })
  };

  
  return (
    <div>
      <h1 className="text-4xl font-bold text-center mt-10 mb-5">
        Register Page
      </h1>
      <form
        onSubmit={handleSubmit}
        className="lg:w-[30%] mx-auto bg-slate-100 shadow-md rounded px-8 pt-6 pb-8 mb-10"
      >
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
            Name:
          </label>
          <input
            className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border"
            id="name"
            type="text"
            placeholder="John Doe"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Email:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="johndoe@example.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="password"
          >
            Password:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="******"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </div>
        <div className="flex items-center justify-between">
         
          <Button type="submit" className="w-[50%] mx-auto" gradientDuoTone="pinkToOrange">
          Register
        </Button>
        </div>
        <p className="mt-4">
          Already have an account? 
          <Link className="text-orange-500 font-bold" to="/login">
            Login
          </Link>
        </p>

      </form>
    </div>
  );
}

export default RegistrationForm;
