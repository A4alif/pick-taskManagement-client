import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <>
      <div className="min-h-[calc(100vh-110px)] bg-[url(https://i.postimg.cc/NjSqPPKg/banner-1.jpg)] bg-no-repeat bg-center bg-cover">
        <div className="container mx-auto px-6">
          <div className=" w-full lg:w-6/12 min-h-screen lg:min-h-0 lg:h-[700px] flex items-center  justify-center text-center lg:text-left pb-14 lg:pb-0  ">
            <div className="max-w-6xl">
              <h2 className="text-3xl md:text-4xl lg:text-5xl mb-9 text-[#f95738] font-semibold">
                Welcome To,
              </h2>
              <h3 className=" text-3xl md:text-4xl lg:text-6xl font-bold text-purple-900 mb-4">
                Task Management System
              </h3>

              <div className="max-w-4xl">
                <p className="text-sm mb-14 leading-6 text-[#15295F] font-semibold mt-14">
                  Elevate your productivity with Pick: Your ultimate task
                  management system for software engineers. Create, delete, and
                  update tasks effortlessly. Stay organized, stay ahead!
                </p>
              </div>
              <Link to={"/dashboard/todos"}>
                <button className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-lg px-5 py-2.5 text-center me-2 mb-2">
                  Let's Explore
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
