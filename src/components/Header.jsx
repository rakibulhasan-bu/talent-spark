import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="my-container flex items-center justify-between py-6">
      <h1 className="text-3xl font-bold">Talent Spark</h1>
      <div className="flex gap-8 text-lg  ">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/statistics"}>Statistics</NavLink>
        <NavLink to={"/applied-jobs"}>Applied Jobs</NavLink>
        <NavLink to={"/blog"}>Blog</NavLink>
      </div>
      <Link to={"/"} className="btn-primary">
        Start Applying
      </Link>
    </div>
  );
};

export default Header;
