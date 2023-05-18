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
          element: <AddAToy></AddAToy>
        },
        {
          path: '/toyInfo/:toyInfoId',
          element: <ViewDetails></ViewDetails>,
          loader: ({ params }) =>
          fetch(`http://localhost:5000/allToys/${params.toyInfoId}`),
        },
        {
          path: '/myToy',
          element: <MyToys></MyToys>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
      ]
    },
  ]);

  export default router;