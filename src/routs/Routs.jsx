import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../components/Home";
import Blog from "../components/Blog";
import ChefDetails from "../components/chefDetails";
import FoodDetails from "../components/FoodDetails";
import Login from "../components/Login";
import Regester from "../components/Regester";
import Error from "../components/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: '/blog',
        element: <Blog></Blog>,
      },
      {
        path:"/login",
        element: <Login></Login>,
      },
      {
        path:"/register",
        element: <Regester></Regester>
      },
      {
        path: "/chefDetails/:id",
        element: <ChefDetails></ChefDetails>,
        loader:({params}) => fetch(`http://localhost:5000/viewFood/${params.id}`)
      },
      {
        path: "/foodDetails/:id",
        element: <FoodDetails></FoodDetails>,
        loader:({params}) => fetch(`http://localhost:5000/viewFood/${params.id}`)
      }
    ],
  },

  
]);

export default router;
