import React from "react";
import { Link } from "react-router-dom";

const Signin = () => {
  return (
    <>
      <div className="flex flex-col items-center gap-4">
        <div className="flex flex-col items-center gap-3">
          <div>
            <img
              src="./tailwind.png"
              className="w-14 h-14 rounded-full"
              alt=""
            />
          </div>
          <div className="text-2xl font-bold">Log in to your account</div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-3">
            <label htmlFor="" className="font-semibold text-sm">
              Email address
            </label>
            <input
              type="email"
              placeholder="Example@gmail.com"
              className="border outline-none p-2 w-96 rounded-md shadow"
            />
          </div>

          <div className="flex flex-col gap-3">
            {" "}
            <label htmlFor="" className="font-semibold text-sm">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="border outline-none p-2 w-96 rounded-md shadow"
            />
          </div>
          <div className="justify-end">
            <p className="font-semibold text-sm text-right text-blue-800 cursor-pointer hover:underline">
              Forget Password ?
            </p>
          </div>

          <button className="border outline-none p-2 w-96 rounded-md shadow bg-blue-700 text-white font-semibold text-sm hover:opacity-90 active:opacity-85">
            Log in
          </button>
        </div>
        <div className="">
          <p className="font-semibold text-base">
            Not a member?
            <Link
              to="/signup"
              className="text-blue-800 cursor-pointer hover:underline"
            >
              {" "}
              Create an Account
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Signin;
