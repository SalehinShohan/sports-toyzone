import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Home/Home";
import Login from "../Login/Login";
import SingUp from "../SingUp/SingUp";
import AddAToy from "../AddAToy/AddAToy";
import ViewDetails from "../ViewDetails/ViewDetails";
import MyToys from "../MyToys/MyToys";
import Blog from "../Blog/Blog";
import ErrorPage from "../ErrorPage/ErrorPage";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AllToys from "../AllToys/AllToys";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
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
          element: <PrivateRoute><AddAToy></AddAToy></PrivateRoute>
        },
        {
          path: '/toyInfo/:toyInfoId',
          element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
          loader: ({ params }) =>
          fetch(`http://localhost:5000/allToys/${params.toyInfoId}`),
        },
        {
          path: '/myToy',
          element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/allToys',
          element:<AllToys></AllToys>,
          
        }
      ]
    },
  ]);

  export default router;