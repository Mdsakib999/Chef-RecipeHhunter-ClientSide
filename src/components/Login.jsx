import { Button } from "flowbite-react";
import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
  const { signIn, GoogleSignIn, githubSighIn } = useContext(AuthContext);

  const [error, setError] = useState('');

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/"

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    setError('')
    console.log(email, password);
    if(/.{6}/.test(password)) {
      setError("Password should be at last 6 Character.");
      return;
    }

    signIn(email, password)
      .then((result) => {
        const ceratedUser = result.user;
        console.log(ceratedUser);
        navigate(from, {replace: true});
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };

 
  const handelGoogleSignIn = () =>{
    GoogleSignIn()
    .then((result) => {
      const loggedUser = result.user;
      // toast.success("Login successfully!");
      // navigate(from, { replace: true });
      console.log(loggedUser);
      navigate(from, {replace: true});
    })
    .catch((error) => {
      // setError(error.message);
      console.log(error.message);
      setError(error.message);
    });
  }


  const handelGithubSignIn = () =>{
    githubSighIn()
    .then((result) => {
      const loggedUser = result.user;
      // toast.success("Login successfully!");
      // navigate(from, { replace: true });
      console.log(loggedUser);
      navigate(from, {replace: true});
    })
    .catch((error) => {
      // setError(error.message);
      console.log(error.message);
      setError(error.message);
    });
  }


  return (
    <div>
      <h1 className="text-4xl font-bold text-center mt-10 mb-5">Login Page</h1>

      <form
        onSubmit={handleLogin}
        className="lg:w-[30%] mx-auto bg-slate-100 shadow-md rounded px-8 pt-6 pb-8 mb-10"
      >
        
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
          <Button
            type="submit"
            className="w-[50%] mx-auto"
            gradientDuoTone="pinkToOrange"
          >
            Login
          </Button>
        </div>
        <p className="mt-4">
          New to ThaiFood Corner?
          <Link className="text-orange-500 font-bold" to="/register">
            Register
          </Link>
        </p>
      </form>
      <p className="text-red-600 text-center font-bold">{error}</p>
      <div className="text-center">
      <button onClick={handelGoogleSignIn} className="b bg-slate-50 rounded-lg mt-5 ml-6 py-2 px-5 font-bold "> <i class="fa-brands fa-google"></i> Login with Google</button> <br />
        <button onClick={handelGithubSignIn} className="b bg-slate-50 rounded-lg mt-5 ml-6 mb-20 py-2 px-5 font-bold "> <i class="fa-brands fa-github text-xl"></i> Login with Github</button>
      </div>
    </div>
  );
};

export default Login;
