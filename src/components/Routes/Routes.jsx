import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Home/Home";
import Login from "../Login/Login";
import SingUp from "../SingUp/SingUp";
import AddAToy from "../AddAToy/AddAToy";

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
        }
      ]
    },
  ]);

  export default router;