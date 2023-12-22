import React from "react";
import LoadingSpinner from "../../../components/LoadingSpinner/LoadingSpinner";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

const MyOnGoingTask = ({ tasks, isLoading }) => {
  return (
    <div>
      <div className="container mx-auto my-16">
        {isLoading && (
          <>
            <div className="text-center">
              {" "}
              <LoadingSpinner />{" "}
            </div>
          </>
        )}
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className="bg-gray-300 text-lg">
              <tr>
                <th>Number</th>

                <th>Task Details</th>
                <th>Status</th>
                <th>Due Date</th>

                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {tasks?.map((task, index) => (
                <tr key={task._id}>
                  <th>
                    <p className="ml-3">{index + 1}</p>
                  </th>

                  <td className="w-2/6">
                    <div className="w-4/4">
                      <p className="text-lg font-semibold">{task?.title}</p>
                      <br />
                      <span className="text-sm leading-8 ">
                        {task?.description}
                      </span>
                    </div>
                  </td>
                  <td>
                    <p className="text-sm font-semibold text-yellow-600 capitalize">
                      {task?.status}
                    </p>
                  </td>
                  <td>
                    <p className="text-sm font-semibold ">{task?.dueDate}</p>
                  </td>

                  <td>
                    <div className="flex items-center gap-3">
                      <button className="btn btn-primary">Completed</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyOnGoingTask;
