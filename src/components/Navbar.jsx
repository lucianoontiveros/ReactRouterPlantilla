import React from "react";
import { NavLink } from "react-router-dom";
import icon from "../assets/Icon.png";
import { hookContext } from "../context/UserContext";

const Navbar = () => {
  const { user, setUser } = hookContext();

  const clasesBotonLink =
    "block p-2 py-2 px-3a md:p-0 rounded hover:bg-white hover:text-black md:hover:bg-transparent md:border-0 md:hover:text-green-400";
  return (
    <nav className="bg-gray-800 border-gray-700 text-slate-100">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 text-slate-100">
        <NavLink
          to="/"
          href="#"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src={icon}
            className="h-8"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap">
            UtilityDev
          </span>
        </NavLink>
        <button
          data-collapse-toggle="navbar-solid-bg"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-solid-bg"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className="hidden w-full  md:block md:w-auto"
          id="navbar-solid-bg"
        >
          <ul className="flex flex-col font-medium mt-4 rounded-lg bg-green-700 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent">
            <li>
              <NavLink
                to="/"
                className={clasesBotonLink}
                aria-current="page"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={clasesBotonLink}
              >
                About
              </NavLink>
            </li>
            {user && (
              <li>
                <NavLink
                  to="/blog"
                  className={clasesBotonLink}
                >
                  blog
                </NavLink>
              </li>
            )}
            {user && (
              <li>
                <NavLink
                  to="/Dashboard"
                  className={clasesBotonLink}
                >
                  Dashboard
                </NavLink>
                <button onClick={() => setUser(false)}>LogOut</button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
