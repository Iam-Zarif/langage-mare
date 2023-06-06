import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    const navItems = (
      <>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link>Instruction</Link>
        </li>
        <li>
          <Link>Classes</Link>
        </li>
        <li>
          <Link>Dashboard</Link>
        </li>
      </>
    );
    return (
      <div className="pt-5">
        <div className="navbar bg-base-100">
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
              <span className="text-4xl ">Language </span>
              <span className="text-3xl text-orange-500">Mare</span>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navItems}</ul>
          </div>
          <div className="navbar-end">
            <Link className="btn" to="login">Log In</Link>
          </div>
        </div>
      </div>
    );
};

export default Navbar;