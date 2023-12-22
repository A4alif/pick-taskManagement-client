import React from "react";

const UpdateTodo = () => {
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const description = form.description.value;
    const dueData = form.dueDate.value;
    const postTags = form.postTags.value;
    const updateTaskInfo = {
        title,
        description,
        dueData,
        postTags,
    }
    console.log(updateTaskInfo);
  };
  return (
    <>
      <div>
        <div>
          <h2 className="mt-9 font-semibold text-2xl md:text-3xl lg:text-5xl single-text-gradient">
            Update Task
          </h2>
          {/* form */}
          <div>
            <div className="mt-9">
              <div className="bg-gray-200 py-9 rounded-lg shadow-lg">
                <form onSubmit={handleUpdate} >
                  <div className=" w-3/4 mx-auto  lg:w-3/4 mb-8 ">
                    <label
                      className="block text-xl font-semibold mb-4"
                      htmlFor="title"
                    >
                      Post Title
                    </label>
                    <input
                      name="title"
                      id="title"
                      className="py-2 px-2 rounded-lg focus:outline-none w-full"
                      type="text"
                      placeholder="Post Title"
                      required
                    />
                  </div>
                  <div className=" w-3/4 mx-auto lg:w-3/4 mb-8 ">
                    <label
                      className="block text-xl font-semibold mb-4"
                      htmlFor="description"
                    >
                      Description
                    </label>
                    <textarea
                      name="description"
                      id="description"
                      cols="10"
                      rows="8"
                      className="py-2 px-2 rounded-lg focus:outline-none w-full"
                      placeholder="Description"
                      required
                    ></textarea>
                  </div>
                  <div className=" w-3/4 mx-auto lg:w-3/4 mb-8 ">
                    <label
                      className="block text-xl font-semibold mb-4"
                      htmlFor="dueDate"
                    >
                      Due Date
                    </label>
                    <input
                      name="dueDate"
                      id="dueDate"
                      className="py-2 px-2 rounded-lg focus:outline-none w-full text-gray-400"
                      type="date"
                      required
                    />
                  </div>
                  <div className=" w-3/4 mx-auto  lg:w-3/4 mb-8 ">
                    <label
                      htmlFor="postTags"
                      className="font-semibold text-lg mr-4"
                    >
                      Select Priority{" "}
                    </label>
                    <select
                      className="w-40 py-2 rounded-md focus:outline-none"
                      name="postTags"
                      id="postTags"
                      required
                    >
                      <option value="">Select Priority</option>
                      <option value="low">Low</option>
                      <option value="moderate">Moderate</option>
                      <option value="high">High</option>
                    </select>
                  </div>
                  <div className="  lg:w-3/4 mx-auto ">
                    <button
                      type="submit"
                      className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-lg px-5 py-2.5 text-center mr-2 mb-2 "
                    >
                      Update Post
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

export default UpdateTodo;
