import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <>
      <div className="flex flex-col gap-5 items-center m-5">
        <div className="flex flex-col gap-3 items-center">
          <div>
            <img
              src="./tailwind.png"
              alt="logo"
              className="w-10 h-10 rounded-full"
            />
          </div>
          <div>
            <p className="font-bold text-2xl">Create a New Account</p>
          </div>
        </div>

        <div>
          <form className="flex flex-col gap-3">
            <div className="flex flex-col gap-3">
              <label htmlFor="" className="text-sm font-semibold">
                Email address
              </label>{" "}
              <input
                type="text"
                placeholder="Example@gmail.com"
                className="border w-96 p-2 rounded-md shadow-md outline-none"
              />
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="" className="text-sm font-semibold">
                Password
              </label>{" "}
              <input
                type="text"
                placeholder="Enter Password"
                className="border w-96 p-2 rounded-md shadow-md outline-none"
              />
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="" className="text-sm font-semibold">
                Confirm Password
              </label>{" "}
              <input
                type="text"
                placeholder="Enter Confirm Password"
                className="border w-96 p-2 rounded-md shadow-md outline-none"
              />
            </div>
            <div className="flex justify-center mt-2">
              <button className="text-base font-semibold p-2 border w-full rounded-md shadow-lg bg-blue-700 text-white hover:opacity-90 active:opacity-85">
                Sign Up
              </button>
            </div>
          </form>
        </div>

        <div>
          <p className="text-slate-600 font-semibold">
            Already a Member?{" "}
            <Link
              className="text-blue-800 font-semibold cursor-pointer hover:underline"
              to="/signin"
            >
              Log In
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Signup;
