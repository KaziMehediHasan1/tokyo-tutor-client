import axios from "axios";
import { toast } from "react-toastify";
const image_hosting_key = import.meta.env.VITE_IMGBB_APIKEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const Register = () => {
  //** REGISTER FORM HANDLER **/
  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const password = e.target.password.value;
    const photo = e.target.photo.files[0];
    const email = e.target.email.value;

    // IMAGE UPLOAD IN IMGBB
    const formData = new FormData();
    formData.append("image", photo);
    const res = await axios.post(image_hosting_api, formData, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });

    const user = {
      name,
      password,
      photo: res?.data?.data?.url,
      email,
    };
    console.log(user, "from 34 no line");
    const data = await axios.post(
      `${import.meta.env.VITE_SEVER_PORT}/user`,
      user
    );
    if (data.data.users) {
      toast.success("User Register Succesfull ");
    } else {
      toast.error("Register Faield ");
    }
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
