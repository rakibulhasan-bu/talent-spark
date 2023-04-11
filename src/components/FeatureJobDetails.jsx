import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { addToDb } from "../../public/utilities/fakedb";

const FeatureJobDetails = () => {
  const id = useParams();

  const data = useLoaderData();

  const jobDetailsData =
    data &&
    data.find((singleJobData) => {
      return singleJobData.job_id == id.id;
    });

  const {
    job_id,
    job_title,
    location,
    salary_range,
    email,
    experience,
    educational_requirements,
    job_description,
    job_responsibility,
    phone,
  } = jobDetailsData;

  const handleAddToDb = (id) => {
    addToDb(id);
  };

  return (
    <div>
      <h1 className="bg-gray-100 py-16 text-center text-5xl font-semibold text-gray-700 ">
        Job Details
      </h1>
      <div className="my-container flex flex-col justify-between gap-8 pb-20 pt-12 md:flex-row ">
        {/* job description starts here  */}
        <div className="space-y-6 md:w-2/3">
          <div>
            <h2 className="pb-1 text-lg font-semibold  text-gray-700">
              Job Description:
            </h2>
            <p className="indent-16 text-gray-400">{job_description}</p>
          </div>

          <div>
            <h2 className="pb-1 text-lg font-semibold text-gray-700">
              Job Responsibility:
            </h2>
            <p className="indent-16 text-gray-400">{job_responsibility}</p>
          </div>

          <div>
            <h2 className="pb12 text-lg font-semibold text-gray-700">
              Educational Requirements:
            </h2>
            <p className="indent-16 text-gray-400">
              {educational_requirements}
            </p>
          </div>

          <div>
            <h2 className="pb12 text-lg font-semibold text-gray-700">
              Experiences:
            </h2>
            <p className="indent-16 text-gray-400">{experience}</p>
          </div>
        </div>

        {/* job details info starts here  */}
        <div className="space-y-4 md:w-1/3">
          <div className="space-y-3 rounded-lg bg-gray-100 p-6 hover:bg-violet-100">
            <h2 className="border-spacing-2 border-b-2 border-gray-300 pb-3  text-xl font-medium text-gray-800">
              Job Details
            </h2>
            <div className="flex space-x-2">
              <img src="/public/assets/Icons/Frame.png" alt="" />
              <span className="font-semibold text-gray-700">Salary : </span>
              <span className="font-medium text-gray-500">{salary_range}</span>
            </div>
            <div className="flex space-x-2">
              <img
                className="object-contain"
                src="/public/assets/Icons/Frame-1.png"
                alt=""
              />
              <span className="font-semibold text-gray-700">Job Title :</span>
              <span className="font-medium text-gray-500">{job_title}</span>
            </div>
            <h2 className="border-spacing-2 border-b-2 border-gray-300 pb-3  text-xl font-medium text-gray-800">
              Contact Information
            </h2>
            <div className="flex space-x-2">
              <img src="/public/assets/Icons/Frame-2.png" alt="" />
              <span className="font-semibold text-gray-700">Phone :</span>
              <span className="font-medium text-gray-500">{phone}</span>
            </div>
            <div className="flex space-x-2">
              <img src="/public/assets/Icons/Frame-3.png" alt="" />
              <span className="font-semibold text-gray-700">Email :</span>
              <span className="font-medium text-gray-500"> {email}</span>
            </div>
            <div className="flex space-x-2">
              <img src="/public/assets/Icons/Frame-4.png" alt="" />
              <span className="font-semibold text-gray-700">Address :</span>
              <span className="font-medium text-gray-500">{location}</span>
            </div>
          </div>
          <button
            onClick={() => handleAddToDb(job_id)}
            className="btn-primary w-full py-3"
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeatureJobDetails;
