import React from "react";
import SectionTitle from "../../../components/sectionTitle/sectionTitle";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const Feature = () => {
  return (
    <>
      <div className="mb-14">
        <div className="container mx-auto px-6">
          <div className=" pb-9 md:pb-0 pt-12 md:pt-14 lg:pt-24">
            <SectionTitle title={"Features "} />
          </div>
          <div className="flex flex-col items-center md:flex-row gap-6">
            <div className="w-full md:w-6/12">
              <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                  <p className="text-md italic font-normal leading-8 text-justify">
                    "Empower engineers with Pick: Effortlessly create, delete,
                    and update tasks. Streamline workflow with intuitive
                    drag-and-drop functionality. Boost productivity seamlessly."
                  </p>
                  <div className="pt-6">
                    <div className="flex space-x-4">
                      <span>
                        <IoMdCheckmarkCircleOutline
                          size={22}
                          className="text-green-600"
                        />
                      </span>
                      <p className="text-xs md:text-sm">
                        Efficiently create, delete, and update tasks for
                        organized workflows.
                      </p>
                    </div>
                  </div>
                  <div className="pt-3">
                    <div className="flex space-x-4">
                      <span>
                        <IoMdCheckmarkCircleOutline
                          size={22}
                          className="text-green-600"
                        />
                      </span>
                      <p className="text-xs md:text-sm">
                        Enhance team communication and coordination.
                      </p>
                    </div>
                  </div>
                  <div className="pt-3">
                    <div className="flex space-x-4">
                      <span>
                        <IoMdCheckmarkCircleOutline
                          size={22}
                          className="text-green-600"
                        />
                      </span>
                      <p className="text-xs md:text-sm">
                        Access all tasks and updates in one place for better
                        visibility.
                      </p>
                    </div>
                  </div>
                  <div className="pt-3">
                    <div className="flex space-x-4">
                      <span>
                        <IoMdCheckmarkCircleOutline
                          size={22}
                          className="text-green-600"
                        />
                      </span>
                      <p className="text-xs md:text-sm">
                        Intuitive task rearrangement for dynamic prioritization.
                      </p>
                    </div>
                  </div>
                  <div className="pt-3">
                    <div className="flex space-x-4">
                      <span>
                        <IoMdCheckmarkCircleOutline
                          size={22}
                          className="text-green-600"
                        />
                      </span>
                      <p className="text-xs md:text-sm">
                        Eliminate bottlenecks and streamline processes for
                        improved efficiency.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-6/12 ">
              <div className="mb-4">
                <img
                  className="max-w-full"
                  src="https://i.postimg.cc/wTxptNKd/software-1-1.jpg"
                  alt=""
                />
              </div>
              <div className="flex flex-col lg:flex-row lg:space-x-3 space-y-4 lg:space-y-0">
                <div>
                  <img
                    className="max-w-full"
                    src="https://i.postimg.cc/7Zfr9yYs/softwre-2-1.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className="max-w-full"
                    src="https://i.postimg.cc/fWfsTKrK/software-3-1.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feature;
