/* eslint-disable no-unused-vars */
import { Link } from 'react-router-dom';
import './Navbar.css'
import Auth from '../../Hooks/Auth';

const Navbar = () => {
  const { user, logOut } = Auth();
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
    const navItems = (
      <>
        <li>
          <Link to="/" className='text-lg font-semibold'>Home</Link>
        </li>
        <li>
          <Link className='text-lg font-semibold'>Instruction</Link>
        </li>
        <li>
          <Link className='text-lg font-semibold'>Classes</Link>
        </li>
        <li>
          <Link className='text-lg font-semibold'>Dashboard</Link>
        </li>
      </>
    );
    return (
      <div className=" sticky top-0 z-50">
        <div className="navbar bg-base-100 pt-5 sticky">
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
                className=" menu menu-sm  dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 "
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