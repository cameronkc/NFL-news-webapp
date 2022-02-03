import { AiFillThunderbolt } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import PropTypes from "prop-types";
import { useState } from "react";
import { useUserAuth } from "../../context/UserAuthContext";
import { useEffect } from "react";
import { themeChange } from "theme-change";
import { IconContext } from "react-icons";
import Sidebar from "./Sidebar";

function Navbar({ title }) {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);

  return (
    <>
      <nav className="navbar shadow-lg bg-neutral text-neutral-content">
        <div className="container mx-auto">
          <div className="flex-none px-2 mx-2">
            <Link to="/" className="text-lg font-bold align-m">
              {title}
            </Link>
          </div>
          <div className="flex-1 px-2 mx-2">
            <div className="flex justify-end">
              <Link to="/home" className="btn btn-ghost btn-sm rounded-btn">
                Home
              </Link>
              <Link to="/news" className="btn btn-ghost btn-sm rounded-btn">
                News
              </Link>
              <IconContext.Provider value={{ color: "gold", size: "23px" }}>
                <button
                  className="btn btn-ghost btn-sm rounded-btn"
                  data-toggle-theme="dark,garden"
                  data-act-class="ACTIVECLASS"
                  onClick={themeChange}
                >
                  <AiFillThunderbolt />
                </button>
              </IconContext.Provider>
              <Link
                to={user ? "/" : "/login"}
                className="btn btn-primary btn-sm rounded-btn ml-2"
                onClick={user ? handleLogout : null}
              >
                {user ? "Log Out" : "Log In"}
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

Navbar.defaultProps = {
  title: "Football",
};

Navbar.propTypes = {
  title: PropTypes.string,
};

export default Navbar;
