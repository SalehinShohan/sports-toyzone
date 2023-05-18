import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Home/Home";
import Login from "../Login/Login";
import SingUp from "../SingUp/SingUp";
import AddAToy from "../AddAToy/AddAToy";
import ViewDetails from "../ViewDetails/ViewDetails";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signup',
          element: <SingUp></SingUp>
        },
        {
          path: '/addToy',
          element: <AddAToy></AddAToy>
        },
        {
          path: '/toyInfo/:toyInfoId',
          element: <ViewDetails></ViewDetails>,
          loader: ({ params }) =>
          fetch(`http://localhost:5000/allToys/sd/${params.toyInfoId}`),
        }
      ]
    },
  ]);

  export default router;