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
import SelectedClasses from "../Pages/Dashboard/SelectedClasses/SelectedClasses";
import Enrolled from "../Pages/Dashboard/Enrolled/Enrolled";
import Payment from "../Pages/Dashboard/Payment/Payment";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory/PaymentHistory";
import ManageUsers from "../Pages/Dashboard/ManageUsers/ManageUsers";
import ManageClasses from "../Pages/Dashboard/ManageClasses/ManageClasses";
import AddAClass from "../Pages/Dashboard/AddAClass/AddAClass";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/login", element: <Login></Login> },
      { path: "/register", element: <Register></Register> },
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <Dashboard></Dashboard>
          </PrivateRoute>
        ),
        children: [
          {
            path: "selectedClass",
            element: <SelectedClasses></SelectedClasses>,
          },
          { path: "enrolled", element: <Enrolled></Enrolled> },
          { path: "payment", element: <Payment></Payment> },
          { path: "history", element: <PaymentHistory></PaymentHistory> },
          { path: "manageUsers", element: <ManageUsers></ManageUsers> },
          { path: "manageClasses" ,element:<ManageClasses></ManageClasses> },
          {path:"addAClass" , element:<AddAClass></AddAClass>}
        ],
      },
      { path: "/instructors", element: <Instructors></Instructors> },
      { path: "/classes", element: <Classes></Classes> },
    ],
  },
  { path: "/*", element: <Error></Error> },
]);

export default router