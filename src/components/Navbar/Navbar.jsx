import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const user = true;
  return (
    <>
      <div className="container mx-auto px-6">
        <div className="navbar ">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
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
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-purple-500 font-semibold "
                        : ""
                    }
                  >
                    Home
                  </NavLink>
                </li>

                <li>
                  {user && (
                    <NavLink
                      to="/dashboard"
                      className={({ isActive, isPending }) =>
                        isPending
                          ? "pending"
                          : isActive
                          ? "text-purple-500-600 font-semibold "
                          : ""
                      }
                    >
                      Dashboard
                    </NavLink>
                  )}
                </li>
              </ul>
            </div>
            <div className="flex items-center gap-2">
              <Link to={"/"}>
                <img
                  className=" w-16 h-16 md:w-24 md:h-24"
                  src="https://i.postimg.cc/jdDbfZLs/pick-logo.png"
                  alt=""
                />
              </Link>
              <div>
                <p className=" text-2xl md:text-3xl font-danc font-semibold">
                  Pick
                </p>
              </div>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex"></div>
          <div className="navbar-end gap-9">
            <ul className=" hidden md:block menu menu-horizontal px-1 text-lg font-normal space-x-8">
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-purple-600 font-semibold "
                    : ""
                }
              >
                Home
              </NavLink>
              {user && (
                <NavLink
                  to="/dashboard/todos"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "text-purple-600-600 font-semibold "
                      : ""
                  }
                >
                  Dashboard
                </NavLink>
              )}
            </ul>
            <Link to={"/login"}>
              <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-md px-5 py-2.5 text-center me-2 mb-2">
                Log In
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
