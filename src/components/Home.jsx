import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import CategoryComponent from "./CategoryComponent";
import FeatureJob from "./FeatureJob";
import { toast } from "react-hot-toast";

const Home = () => {
  const categoryData = useLoaderData();

  const [featureJob, setFeatureJob] = useState([]);
  const [seeAll, setSeeAll] = useState(false);

  const handleSeeAll = () => {
    setSeeAll(!seeAll);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/public/jsonData/FeatureJobData.json");
        const jsonData = await response.json();
        setFeatureJob(jsonData);
      } catch (error) {
        toast.error(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="my-container">
      {/* banner section starts here  */}
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
            <Link to={"/"} className="btn-primary py-3">
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

      {/* job category section start here  */}
      <div className="py-20">
        <h1 className="title">Job Category List</h1>
        <p className="sub-title">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
        <div className="grid gap-8 py-8 md:grid-cols-2 lg:grid-cols-4">
          {categoryData.map((category) => (
            <CategoryComponent key={category.category_id} category={category} />
          ))}
        </div>
      </div>

      {/* Featured Jobs section start here  */}
      <div className="pb-20">
        <h1 className="title">Featured Jobs</h1>
        <p className="sub-title">
          Discover exciting career opportunities and make your mark in the
          industry with us!
        </p>
        <div className="grid gap-12 py-8 md:grid-cols-2">
          {featureJob &&
            featureJob
              .slice(0, `${seeAll && seeAll ? 12 : 4}`)
              .map((singleJob) => (
                <FeatureJob key={singleJob.job_id} singleJob={singleJob} />
              ))}
        </div>
        <div className="text-center">
          <button onClick={handleSeeAll} className="btn-primary py-3">
            {seeAll && seeAll ? "See less Job" : "See All Jobs"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
