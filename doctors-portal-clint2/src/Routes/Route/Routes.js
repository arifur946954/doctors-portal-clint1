
import { createBrowserRouter } from "react-router-dom";
import Main from "../../Laout/Main";
import Appoinment from "../../Pages/Appoinment/Appoinment/Appoinment";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRouter/PrivateRoute";



 const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
        path:'/',
        element:<Home></Home>
        },
        {
            path:'/login',
            element:<Login></Login>
            },
            {
              path:'/signup',
              element:<SignUp></SignUp>
              },
            {
              path:'/appoinment',
              element:<Appoinment></Appoinment>
              }

]
    },
    {
      path:'/dashboard',
      element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>
    }
   
  ]);
  export default router;