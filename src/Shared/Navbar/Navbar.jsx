/* eslint-disable react/prop-types */
// Navbar.js
import { Link, NavLink } from "react-router-dom";

import "./Navbar.css"
import Auth from "../../Hooks/Auth";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logOut } = Auth();

  const handleLogOut = () => {
    logOut()
      .then(() => {
        Swal.fire({
          title: "Logged Out!!!",
          timer: 1500,
          showClass: {
            popup: "animate__animated animate__flipInX",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        });
      })
      .catch((error) => console.log(error));
  };

  const navItems = (
    <>
      <li>
        <NavLink
          exact
          to="/"
          activeClassName="active"
          className="text-lg font-semibold navItems"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/instructors"
          activeClassName="active"
          className="text-lg font-semibold navItems"
        >
          Instructors
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/classes"
          activeClassName="active"
          className="text-lg font-semibold navItems"
        >
          Classes
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard"
          activeClassName="active"
          className="text-lg font-semibold navItems"
        >
          Dashboard
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="sticky top-0 z-50">
      <div
        className={`navbar
        } bg-base-100 pt-5 sticky`}
      >
        {/* Navbar content */}
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
          <Link className="btn btn-ghost logo">
            <span className="text-lg lg:text-2xl">Language </span>
            <span className="text-xl lg:text-4xl text-orange-500">Mare</span>
          </Link>
          <div>
            <img
              className="w-[70px] rounded-full"
              src="https://i.ibb.co/kSH5NjS/lovepik-real-estate-building-logo-png-image-401737175-wh1200.png"
              alt=""
            />
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
        <div className="navbar-end flex lg:flex-row gap-2 flex-col opacity-80 lg:opacity-100 ml-24 lg:ml-0">
          
          {user && (
            <>
              <img className="w-14 rounded-full" src={user.photoURL} alt="" />
            </>
          )}
          {user ? (
            <>
              <Link className="btn" onClick={handleLogOut}>
                Log Out
              </Link>
            </>
          ) : (
            <>
              <Link className="btn" to="login">
                Log In
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
