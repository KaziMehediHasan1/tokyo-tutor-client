import axios from "axios";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { login } from "../../redux/slice/slice";

const Login = () => {
  const dispatch = useDispatch();
  // HANDLE LOGIN
  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    // BERFOR LOGIN USER

    if (!email || !password) {
      toast.error("mail and password is required");
      return;
    }

    const res = await axios.post(`${import.meta.env.VITE_SEVER_PORT}/users`, {
      email,
      password,
    });

    if (res.data.user) {
      localStorage.setItem("token", res.data.token);
      dispatch(login(res.data.user));
      toast.success("LogIn Successfull");
    } else {
      toast.error("incurrect credantials");
    }
  };
  return (
    <div className=" w-[440px] py-20  mx-auto">
      <form
        onSubmit={handleLogin}
        className="space-y-4 bg-gray-600 p-5 rounded"
      >
        <div className="flex flex-col space-y-2">
          <label className="text-white font-semibold">Email</label>
          <input
            type="email"
            placeholder="Enter Email"
            required
            name="email"
            className="border ring-1 rounded-xl px-3 py-1"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label className="text-white font-semibold">Password</label>
          <input
            type="password"
            name="password"
            required
            placeholder="Enter Password"
            className="border ring-1 py-1 rounded-xl px-3"
          />
        </div>
        <button className="mx-auto w-full py-2 rounded bg-white">LogIn</button>
      </form>
    </div>
  );
};

export default Login;
