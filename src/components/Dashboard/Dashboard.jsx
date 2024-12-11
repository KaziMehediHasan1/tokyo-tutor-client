import React from "react";
import DashboardBar from "./DashboardBar";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex w-[100%] mx-auto px-5">
      <DashboardBar className="w-[20%] mx-auto"/>
      <div className="w-[80%] mx-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
