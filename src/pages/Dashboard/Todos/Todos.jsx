import React, { useContext, useState } from "react";
import useAllTasks from "../../../hooks/useAllTasks";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { Link } from "react-router-dom";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import LoadingSpinner from "./../../../components/LoadingSpinner/LoadingSpinner";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { AuthContext } from "../../../Provider/AuthProvider";

const Todos = () => {
  const {user} = useContext(AuthContext);
  const [tasks, isLoading, refetch] = useAllTasks();
  const axiosPublic = useAxiosPublic();

  // delete task
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

  const handleAddTaskToCart= (task) => {
    // console.log(task);
    const cartInfo = {
      title: task?.title,
      description: task?.description,
      dueDate: task?.dueDate,
      status: "ongoing",
      taskMainId: task?._id,
      email: user?.email
    }

    axiosPublic.post("/mytask-cart", cartInfo)
    .then(res => {
      if (res.data.result.insertedId) {
        Swal.fire({
          icon: "success",
          title: "You Took The Task",
          showConfirmButton: false,
          timer: 1500,
        });
        
      } else {
        Swal.fire({
          icon: "error",
          title: "Something Went Wrong",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    })
  }

  return (
    <>
      <div>
        <div>
          <h2 className=" text-2xl md:text-3xl lg:text-4xl single-text-gradient font-semibold text-center mt-9">
            Pick Task Management System
          </h2>
        </div>
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
                    
                    <th>Take Task</th>
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
                        <p className="text-sm font-semibold ">
                          {task?.dueDate}
                        </p>
                      </td>
                      
                      <td>
                        <div>
                          <div>
                            <button onClick={() => handleAddTaskToCart(task)}  className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                              Take Task
                            </button>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="flex items-center gap-3">
                         <Link to={`update-task/${task._id}`}> <p>
                            <FaEdit
                              className="text-indigo-400 cursor-pointer"
                              size={35}
                            />
                          </p></Link>
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
      </div>

      {/* old */}
      {/* <div>
        <div className="text-3xl mt-9">Todos {tasks.length}</div>
        <div className="mt-6">
          {tasks?.map((task) => (
            <div key={task._id}>
              <h2 className="pb-4">{task.title}</h2>
              <Link to={`update-task/${task._id}`} ><button className="btn btn-primary mr-4">Update Todo</button></Link>
              <button
                onClick={() => handleDeleteTask(task?._id)}
                className="btn btn-warning"
              >
                Delete Todo
              </button>
            </div>
          ))}
        </div>
      </div> */}
    </>
  );
};

export default Todos;
