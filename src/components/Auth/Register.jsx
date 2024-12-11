import React from "react";

const Register = () => {
  //** Register Form Handler **/
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const password = e.target.password.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    console.log({
      name,
      password,
      photo,
      email,
    });
  };
  return (
    <div className=" w-[440px] py-20  mx-auto">
      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-gray-600 p-5 rounded"
      >
        <div className="flex flex-col space-y-2">
          <label className="text-white font-semibold">Name</label>
          <input
            type="text"
            placeholder="Enter Name"
            name="name"
            className="border ring-1 rounded-xl px-3 py-1"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label className="text-white font-semibold">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            className="border ring-1 rounded-xl px-3 py-1"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label className="text-white font-semibold">Photo</label>
          <input type="file" name="photo" className="text-white py-1" />
        </div>
        <div className="flex flex-col space-y-2">
          <label className="text-white font-semibold">Password</label>
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            className="border ring-1 py-1 rounded-xl px-3"
          />
        </div>
        <button
          type="submit"
          className="mx-auto font-semibold btn w-full py-2 rounded bg-white"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
