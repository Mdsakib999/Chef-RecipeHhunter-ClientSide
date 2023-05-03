import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../components/Home";
import Blog from "../components/Blog";
import ChefDetails from "../components/chefDetails";
import FoodDetails from "../components/FoodDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/chefDetails/:id",
        element: <ChefDetails></ChefDetails>,
        loader:({params}) => fetch(`http://localhost:5000/viewFood/${params.id}`)
      },
      {
        path: "/foodDetails/:id",
        element: <FoodDetails></FoodDetails>
      }
    ],
  },
]);

export default router;
