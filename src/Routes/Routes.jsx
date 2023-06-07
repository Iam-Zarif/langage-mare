import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Home from "../Pages/Home/Home/home";
import Error from "../Error/Error";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Dashboard from "../Dashboard/Dashboard";
import Instructors from "../Pages/Instructors/Instructors";
import Classes from "../Pages/Classes/Classes";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [{ path: "/", element: <Home></Home> },
  {path:"/login" , element:<Login></Login>},
  {path:"/register" , element:<Register></Register>},
  {path:"/dashboard" , element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>},
  {path:"/instructors" , element:<Instructors></Instructors>},
  {path:"/classes" , element:<Classes></Classes>}
  ],
  },
  { path: "/*", element: <Error></Error> },
]);

export default router