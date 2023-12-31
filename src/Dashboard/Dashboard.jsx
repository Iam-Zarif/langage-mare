/* eslint-disable no-unused-vars */
import { NavLink, Outlet } from "react-router-dom";
import Title from "../Title/Title";
import { MdAdd, MdFlightClass } from "react-icons/md";
import { GiSchoolBag } from "react-icons/gi";

import { TbArmchair, TbChairDirector } from "react-icons/tb";
import { FaCcAmazonPay, FaUserCheck } from "react-icons/fa";
import { AiOutlineHistory } from "react-icons/ai";
import "./dashboard.css";  
import useAdmin from "../Hooks/useAdmin";
import useInstructor from "../Hooks/useInstructor";
import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";

const Dashboard = () => {
  const [instructor] = useInstructor();
  const [admin, isAdminLoading] = useAdmin();

  console.log(admin);
  console.log(instructor);

  
  Title("MARE | DASHBOARD");
  return (
    <Fade cascade damping={0.1}>
      <div>
        <div className="drawer lg:drawer-open">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col ">
            {/* Page content here */}
            <label
              htmlFor="my-drawer-2"
              className="btn btn-primary drawer-button lg:hidden"
            >
              Open drawer
            </label>
            <Outlet></Outlet>
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
            <ul className="pt-40 lg:pt-10 menu p-4 w-80 h-full bg-base-200 text-base-content">
              {/* Sidebar content here */}

              {admin && (
                <Fade cascade damping={0.1}>
                  {/* {console.log(admin.admin)} */}
                  <li>
                    <p className="text-xl text-white font-bold">Admin Home</p>
                  </li>
                  <li>
                    <NavLink
                      activeClassName="active"
                      to="/dashboard/manageClasses"
                      className="text-lg dashNav"
                    >
                      <GiSchoolBag /> Manage Classes
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      activeClassName="active"
                      to="/dashboard/manageUsers"
                      className="text-lg dashNav"
                    >
                      <FaUserCheck /> Manage Users
                    </NavLink>
                  </li>
                </Fade>
              )}
              {instructor && (
                <Fade cascade damping={0.1}>
                  <li>
                    <p className="text-xl text-white font-bold">
                      Instructor Home
                    </p>
                  </li>
                  <li>
                    <NavLink
                      activeClassName="active"
                      to="/dashboard/addAClass"
                      className="text-lg dashNav"
                    >
                      <MdAdd /> Add A Class
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      activeClassName="active"
                      to="/dashboard/myClasses"
                      className="text-lg dashNav"
                    >
                      <TbChairDirector /> My classes
                    </NavLink>
                  </li>
                </Fade>
              )}
              {!admin && !instructor && (
                <Fade cascade damping={0.1}>
                  <li>
                    <p className="text-xl text-white font-bold">Student Home</p>
                  </li>
                  <li>
                    <NavLink
                      activeClassName="active"
                      to="/dashboard/selectedClass"
                      className="text-lg dashNav"
                    >
                      <MdFlightClass /> Selected Classes
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      activeClassName="active"
                      to="/dashboard/enrolled"
                      className="text-lg dashNav"
                    >
                      <TbArmchair /> Enrolled classes
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      activeClassName="active"
                      to="/dashboard/payment"
                      className="text-lg dashNav"
                    >
                      <FaCcAmazonPay /> Payment
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      activeClassName="active"
                      to="/dashboard/history"
                      className="text-lg dashNav"
                    >
                      <AiOutlineHistory /> Payment History
                    </NavLink>
                  </li>
                </Fade>
              )}
            </ul>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default Dashboard;
