import React from "react";

const Login = () => {
  return (
    <div className=" w-[440px] py-20  mx-auto">
      <form className="space-y-4 bg-gray-600 p-5 rounded">
        <div className="flex flex-col space-y-2">
          <label className="text-white font-semibold">Name</label>
          <input
            type="text"
            placeholder="Enter Name"
            className="border ring-1 rounded-xl px-3 py-1"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label className="text-white font-semibold">Email</label>
          <input
            type="email"
            placeholder="Enter Email"
            className="border ring-1 rounded-xl px-3 py-1"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label className="text-white font-semibold">Photo</label>
          <input type="file" className="text-white py-1" />
        </div>
        <div className="flex flex-col space-y-2">
          <label className="text-white font-semibold">Password</label>
          <input
            type="password"
            placeholder="Enter Password"
            className="border ring-1 py-1 rounded-xl px-3"
          />
        </div>
        <button className="mx-auto w-full py-2 rounded bg-white">
          Register
        </button>
      </form>
    </div>
  );
};

export default Login;
