import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const Register = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const handleRegister = (data) => {
    const { name, photourl, email, password } = data;
    console.log(name, photourl, email, password);
  };
  return (
    <>
      <div>
        <div className="container mx-auto">
          <div className="py-9  flex flex-col lg:flex-row items-center ">
            <div className=" w-3/4 lg:w-1/2">
              <div className="card w-full lg:w-3/4 mx-auto bg-base-100 shadow-xl">
                <div className="p-8  ">
                  <div className="flex justify-center">
                    <h2 className="card-title text-2xl font-semibold mb-6">
                      {" "}
                      Welcome to <span className="text-purple-600">
                        Pick
                      </span>{" "}
                    </h2>
                  </div>
                  <p className="text-center text-xl font-semibold mb-4">
                    Please Register
                  </p>
                  <form onSubmit={handleSubmit(handleRegister)} noValidate>
                    <div className="w-3/4 mx-auto mb-4 ">
                      <label
                        className="block text-xl mb-4 font-semibold"
                        htmlFor="name"
                      >
                        Name
                      </label>
                      <input
                        className="bg-gray-200 w-full py-2 px-2 rounded-md focus:outline-none "
                        {...register("name", {
                          required: {
                            value: true,
                            message: "Name is Required",
                          },
                        })}
                        type="text"
                        name="name"
                        id="name"
                        placeholder="name"
                      />
                      <p className="text-pink-600">{errors.name?.message}</p>
                    </div>
                    <div className="w-3/4 mx-auto mb-4 ">
                      <label
                        className="block text-xl mb-4 font-semibold"
                        htmlFor="photourl"
                      >
                        Photo URL
                      </label>
                      <input
                        className="bg-gray-200 w-full py-2 px-2 rounded-md focus:outline-none "
                        {...register("photourl", {
                          required: {
                            value: true,
                            message: "PhotoUrl is Required",
                          },
                        })}
                        type="text"
                        name="photourl"
                        id="photourl"
                        placeholder="photourl"
                      />
                      <p className="text-pink-600">
                        {errors.photourl?.message}
                      </p>
                    </div>
                    <div className="w-3/4 mx-auto mb-4 ">
                      <label
                        className="block text-xl mb-4 font-semibold"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        className="bg-gray-200 w-full py-2 px-2 rounded-md focus:outline-none "
                        {...register("email", {
                          required: {
                            value: true,
                            message: "Email is Required",
                          },
                          pattern: {
                            value:
                              /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                            message: "Provide a valid Email",
                          },
                        })}
                        type="email"
                        name="email"
                        id="email"
                        placeholder="email"
                      />
                      <p className="text-pink-600">{errors.email?.message}</p>
                    </div>
                    <div className="w-3/4 mx-auto mb-4 ">
                      <label
                        className="block text-xl mb-4 font-semibold"
                        htmlFor="password"
                      >
                        Password
                      </label>
                      <input
                        className="bg-gray-200 w-full py-2 px-2 rounded-md focus:outline-none "
                        {...register("password", {
                          required: {
                            value: true,
                            message: "Password is Required",
                          },
                          pattern: {
                            value:
                              /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
                            message:
                              "Password must be 6 character, One uppercase, lowercase and special character",
                          },
                        })}
                        type="password"
                        name="password"
                        id="password"
                        placeholder="password"
                      />
                      <p className="text-pink-600">
                        {errors.password?.message}
                      </p>
                    </div>
                    <div className="w-3/4 mx-auto mb-4 mt-6 ">
                      <button
                        type="submit"
                        className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-xl px-5 py-2.5 text-center mr-2 mb-2 w-full "
                      >
                        Register
                      </button>
                    </div>
                    <div className="w-3/4 mx-auto mb-4 mt-6 ">
                      <p>
                        Already have an account? Please{" "}
                        <Link to={"/login"}>
                          {" "}
                          <span className="text-blue-500 underline">
                            Login
                          </span>{" "}
                        </Link>{" "}
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className=" w-3/4 lg:w-1/2">
              <img src="https://i.postimg.cc/Z5YFtYM5/register.webp" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
