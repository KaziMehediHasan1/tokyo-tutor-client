import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 px-8">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <div
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <div className="menu menu-horizontal px-1 flex item-center px-4">
              <NavLink className="">Lessons</NavLink>
              <NavLink>Tutorials</NavLink>
              <NavLink>Dashboard</NavLink>
            </div>
          </div>
        </div>
        <Link className="btn btn-ghost text-xl">daisyUI</Link>
      </div>
      <div className="space-x-6 flex items-center">
        <NavLink to="/lessons" className="text-xl font-semibold">
          Lessons
        </NavLink>
        <NavLink to="/tutorials" className="text-xl ">
          Tutorials
        </NavLink>
        <NavLink to="dashboard">Dashboard</NavLink>
      </div>

      <div className="navbar-end flex item-center space-x-3">
        <Link to="/login" className="btn">
          LogIn
        </Link>
        <Link to="/regester" className="btn">
          Register
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
