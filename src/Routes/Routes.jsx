import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Home from "../Pages/Home/Home/home";
import Error from "../Error/Error";
import Login from "../Pages/Login/Login";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [{ path: "/", element: <Home></Home> },
  {path:"/login" , element:<Login></Login>}
  ],
  },
  { path: "/*", element: <Error></Error> },
]);

export default router