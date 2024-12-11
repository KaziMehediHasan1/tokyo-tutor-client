import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="h-screen">
      <Navbar />
      <div className="min-h-[calc(100vh-288px)] ">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;