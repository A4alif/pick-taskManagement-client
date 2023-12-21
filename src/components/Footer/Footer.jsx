import React from "react";
import moment from "moment";
import { FaRegCopyright } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <div>
        <div className="container mx-auto px-6 py-16">
          <div className="flex flex-col items-center md:flex-row md:justify-between">
            {/* copyright text */}
            <div>
              <div className="flex items-center">
                <p className="text-lg">All Rights Reserved </p>
                <p>
                  {" "}
                  <FaRegCopyright className="mx-2" size={25} />{" "}
                </p>
                <p className="text-lg">
                  {" "}
                  by{" "}
                  <span className="font-bold single-text-gradient">
                    Pick
                  </span>{" "}
                </p>
              </div>
              <p className="mt-4 text-center md:text-left mb-6 md:mb-0">
                {" "}
                <span className="text-md italic">
                  {" "}
                  {moment().format("MMMM Do YYYY")}
                </span>
              </p>
            </div>
            {/* social icons */}
            <div>
              <p className=" text-center mb-4 text-lg font-semibold">
                Follow Us On
              </p>
              <div className="flex items-center space-x-2">
                <div>
                  <Link target="_blank" to={"https://www.linkedin.com/"}>
                    <img
                      className="w-16 h-16"
                      src="https://i.postimg.cc/QtVzPsPL/linkedin3d.png"
                      alt="linkedin"
                    />
                  </Link>
                </div>
                <div>
                  <Link target="_blank" to={"https://twitter.com/"}>
                    <img
                      className="w-16 h-16"
                      src="https://i.postimg.cc/NMVnvSqK/twitter3d.png"
                      alt="TwitterLogo"
                    />
                  </Link>
                </div>
                <div>
                  <Link target="_blank" to={"https://www.facebook.com"}>
                    <img
                      className="w-16 h-16"
                      src="https://i.postimg.cc/brrQ2ZjZ/facebook-third-3d.png"
                      alt="facebooklogo"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
