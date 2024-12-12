import React from "react";
import { NavLink } from "react-router-dom";

const DashboardBar = () => {
  return (
    <div className="bg-slate-400 max-h-[1000px] min-h-svh">
      <div className="flex flex-col space-y-3 px-7 pt-5 ">
        <NavLink to="Dlesson" className="font-semibold text-white">
          Lesson
        </NavLink>
        <NavLink to="add-lesson" className="font-semibold text-white">
          Add Lessons
        </NavLink>
        <NavLink to="add-vocabularies" className="font-semibold text-white">
          Add Vocabulary
        </NavLink>
        <NavLink to="Lmanagement" className="font-semibold text-white">
          Lesson Manegment
        </NavLink>
        <NavLink to="vmanegement" className="font-semibold text-white">
          Vocabulary Manegment
        </NavLink>
        <NavLink to="users" className="font-semibold text-white">
          Users
        </NavLink>
      </div>
    </div>
  );
};

export default DashboardBar;
