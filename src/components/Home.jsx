import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="my-container">
      <div className="flex h-[80vh] flex-col items-center justify-between lg:flex-row">
        <div className="w-1/2 space-y-6">
          <div className=" text-6xl font-semibold text-gray-900">
            <p>One Step</p> <p>Closer To Your</p>
            <p className="animation-text text-6xl"> Dream Job</p>
          </div>
          <p className="font-medium text-gray-600">
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
          <div className="pt-2">
            <Link to={"/"} className="btn-primary">
              Get Started
            </Link>
          </div>
        </div>
        <div className="h-full w-1/2">
          <img
            className="h-full w-full object-cover"
            src="/public/assets/Images/P3OLGJ1 copy 1.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
