/* eslint-disable react/prop-types */
// Main.js
import Navbar from "../../Shared/Navbar/Navbar";
import Footer from "../../Shared/Footer/Footer";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";

const Main = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  const handleToggle = () => {
    setDarkTheme(!darkTheme);
  };
  return (
    <div className={darkTheme ? "dark-theme" : ""}>
      <Fade cascade damping={0.1}>
        <Navbar />
        <section className="text-center">
          <input
            type="checkbox"
            className="toggle toggle-md"
            checked={darkTheme}
            onChange={handleToggle}
          />
        </section>
        <Outlet></Outlet>
        <Footer />
      </Fade>
    </div>
  );
};

export default Main;
