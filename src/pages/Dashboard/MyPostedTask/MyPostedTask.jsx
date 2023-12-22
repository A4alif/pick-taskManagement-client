import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";
import LoadingSpinner from "../../../components/LoadingSpinner/LoadingSpinner";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const MyPostedTask = ({ tasks, isLoading, refetch }) => {
  const axiosPublic = useAxiosPublic();
  const handleDeleteTask = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        //   delete item from cart
        axiosPublic.delete(`/delete-task/${id}`).then((res) => {
          if (res.data.result.deletedCount > 0) {
            refetch();
            Swal.fire({
              icon: "success",
              title: "Task deleted successfully",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
      }
    });
  };
  return (
    <>
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
                  <th>Author</th>
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
                    <td>
                      <div className="flex items-center gap-3 ">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={task?.authorImg}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{task?.authorName}</div>
                        </div>
                      </div>
                    </td>
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
                        <p onClick={() => handleDeleteTask(task?._id)}>
                          <MdDeleteForever
                            className="text-rose-700 cursor-pointer"
                            size={35}
                          />
                        </p>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyPostedTask;
