import React from "react";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <>
      <div>
        <div className="flex">
          <div className="left w-[300px] bg-green-400">
            <h2>Navigation Bar</h2>
          </div>
          <div className="right flex-1 bg-purple-400">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
