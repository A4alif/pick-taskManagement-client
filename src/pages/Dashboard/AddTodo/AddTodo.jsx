import React from "react";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";

const AddTodo = () => {
  const axiosPublic = useAxiosPublic();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleAddTask = (data) => {
    const { title, description, dueDate, priority } = data;

    const newPostInfo = {
      title,
      description,
      dueDate,
      priority,
    };
    axiosPublic.post("/add-task", newPostInfo).then((res) => {
      if (res.data.result.insertedId) {
        Swal.fire({
          icon: "success",
          title: "Post Added to Database Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        reset();
      } else {
        Swal.fire({
          icon: "error",
          title: "Something Went Wrong",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  return (
    <>
      <div>
        <div>
          <h2 className="mt-9 font-semibold text-2xl md:text-3xl lg:text-5xl single-text-gradient">
            Add a New Task
          </h2>
          {/* form */}
          <div>
            <div className="mt-9">
              <div className="bg-gray-200 py-9 rounded-lg shadow-lg">
                <form onSubmit={handleSubmit(handleAddTask)} noValidate>
                  <div className=" w-3/4 mx-auto  lg:w-3/4 mb-8 ">
                    <label
                      className="block text-xl font-semibold mb-4"
                      htmlFor="title"
                    >
                      Post Title
                    </label>
                    <input
                      {...register("title", {
                        required: {
                          value: true,
                          message: "Title is Required",
                        },
                      })}
                      name="title"
                      id="title"
                      className="py-2 px-2 rounded-lg focus:outline-none w-full"
                      type="text"
                      placeholder="Post Title"
                    />
                    <p className="text-pink-600">{errors.title?.message}</p>
                  </div>
                  <div className=" w-3/4 mx-auto lg:w-3/4 mb-8 ">
                    <label
                      className="block text-xl font-semibold mb-4"
                      htmlFor="description"
                    >
                      Description
                    </label>
                    <textarea
                      {...register("description", {
                        required: {
                          value: true,
                          message: "Description is Required",
                        },
                      })}
                      name="description"
                      id="description"
                      cols="10"
                      rows="8"
                      className="py-2 px-2 rounded-lg focus:outline-none w-full"
                      placeholder="Description"
                    ></textarea>
                    <p className="text-pink-600">
                      {errors.description?.message}
                    </p>
                  </div>
                  <div className=" w-3/4 mx-auto lg:w-3/4 mb-8 ">
                    <label
                      className="block text-xl font-semibold mb-4"
                      htmlFor="dueDate"
                    >
                      Due Date
                    </label>
                    <input
                      {...register("dueDate", {
                        required: {
                          value: true,
                          message: "dueDate is Required",
                        },
                      })}
                      name="dueDate"
                      id="dueDate"
                      className="py-2 px-2 rounded-lg focus:outline-none w-full text-gray-400"
                      type="date"
                    />
                    <p className="text-pink-600">{errors.postDate?.message}</p>
                  </div>
                  <div className=" w-3/4 mx-auto  lg:w-3/4 mb-8 ">
                    <label
                      htmlFor="priority"
                      className="font-semibold text-lg mr-4"
                    >
                      Select Tags{" "}
                    </label>
                    <select
                      {...register("priority", {
                        required: {
                          value: true,
                          message: "Select option is Required",
                        },
                      })}
                      className="w-40 py-2 rounded-md focus:outline-none"
                      name="priority"
                      id="priority"
                    >
                      <option value="">Select Tags</option>
                      <option value="low">Low</option>
                      <option value="moderate">Moderate</option>
                      <option value="high">High</option>
                    </select>
                    <p className="text-pink-600">{errors.priority?.message}</p>
                  </div>
                  <div className="  lg:w-3/4 mx-auto ">
                    <button
                      type="submit"
                      className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-lg px-5 py-2.5 text-center mr-2 mb-2 "
                    >
                      Submit post
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddTodo;
