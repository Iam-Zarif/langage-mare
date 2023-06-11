/* eslint-disable react/prop-types */
// Main.js
import Navbar from "../../Shared/Navbar/Navbar";
import Footer from "../../Shared/Footer/Footer";
import { Outlet } from "react-router-dom";

const Main = ({ darkMode, toggleDarkMode }) => {
  return (
    <div className={`main ${darkMode ? "dark" : ""}`}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
   
     <Outlet></Outlet>
      <Footer />
    </div>
  );
};

export default Main;
