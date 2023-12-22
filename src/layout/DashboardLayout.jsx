import React, { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { AuthContext } from './../Provider/AuthProvider';
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";
import { CiHome } from "react-icons/ci";

const DashboardLayout = () => {
  const {user, logOut} = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast("Logged Out");
      })
      .catch((error) => console.log(error));
  };
  return (
    <>
    <Helmet>
      <title>Pick | Dashboard</title>
    </Helmet>
      <div>
        <div className="flex">
          <div className="left min-h-screen w-[280px] bg-gray-50 border-r-2 shadow-lg">
            <div className="flex flex-col justify-between h-full    ">
              <ul className="flex flex-col items-center space-y-8 ">
                <li className="pt-9 text-2xl font-medium">
                  <NavLink
                    to="/dashboard/tasks"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-purple-600 font-semibold "
                        : ""
                    }
                  >
                    All Task
                  </NavLink>
                </li>
                <li className="text-2xl font-medium">
                  <NavLink
                    to="/dashboard/add-task"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-purple-600 font-semibold "
                        : ""
                    }
                  >
                    Add Task
                  </NavLink>
                </li>
                <li className="text-2xl font-medium">
                  <NavLink
                    to="/dashboard/my-task"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-purple-600 font-semibold "
                        : ""
                    }
                  >
                    My Task
                  </NavLink>
                </li>
                <div className="divider divider-success pt-9">
                  <CiHome size={60} />
                </div>
                <li className="text-2xl font-medium">
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
                </li>
              </ul>
              <div className="flex flex-col items-center space-y-6 mb-9" >
                <div className="" >
                  <img
                    className="w-12 h-12 rounded-full"
                    src={user?.photoURL}
                    alt=""
                  />
                </div>
                <h2 className="font-semibold" >{user?.displayName}</h2>
                <button onClick={handleLogOut} className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-md px-5 py-2.5 text-center me-2 mb-2" >
                  Log Out
                </button>
              </div>
            </div>
          </div>
          <div className="right container mx-auto px-6">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
