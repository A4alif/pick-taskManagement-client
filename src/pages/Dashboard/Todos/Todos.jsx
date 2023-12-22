import React from "react";
import useAllTasks from "../../../hooks/useAllTasks";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const Todos = () => {
  const [tasks,  isLoading, refetch] = useAllTasks();
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
        axiosPublic.delete(`/delete-task/${id}`)
        .then(res => {
          if (res.data.result.deletedCount > 0) {
            refetch();
            Swal.fire({
              icon: "success",
              title: "Task deleted successfully",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        })
      }
    });
  };

  return (
    <>
      <div>
        <div className="text-3xl mt-9">Todos {tasks.length}</div>
        <div className="mt-6">
          {tasks.map((task) => (
            <div key={task._id}>
              <h2 className="pb-4">{task.title}</h2>
              <button className="btn btn-primary mr-4">Update Todo</button>
              <button
                onClick={() => handleDeleteTask(task?._id)}
                className="btn btn-warning"
              >
                Delete Todo
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Todos;
