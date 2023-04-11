import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const FeatureJobDetails = () => {
  const id = useParams();

  const [jobData, setJobData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/public/jsonData/FeatureJobData.json");
      const data = await response.json();
      setJobData(data);
    }
    fetchData();
  }, []);

  const jobDetailsData = jobData.find((singleJobData) => {
    return singleJobData.job_id == id.id;
  });

  const {
    company_name,
    company_logo,
    employee_type,
    employment_type,
    job_title,
    job_id,
    location,
    salary_range,
  } = jobDetailsData;
  return (
    <div className="my-container py-24">
      <h1 className="title text-center">Job Details</h1>
      <div className="flex justify-between gap-8 py-16 ">
        {/* job description starts here  */}
        <div className="w-2/3 space-y-6">
          <div>
            <h2 className="pb-1 text-lg font-semibold  text-gray-700">
              Job Description:
            </h2>
            <p className="indent-16 text-gray-400">
              A UI/UX (User Interface/User Experience) designer is responsible
              for designing and creating engaging and effective interfaces for
              software and web applications. This includes designing the layout,
              visual design, and interactivity of the user interface.
            </p>
          </div>

          <div>
            <h2 className="pb-1 text-lg font-semibold text-gray-700">
              Job Responsibility:
            </h2>
            <p className="indent-16 text-gray-400">
              Collaborating with cross-functional teams: UI/UX designers often
              work closely with other teams, including product management,
              engineering, and marketing, to ensure that the user interface is
              aligned with business and technical requirements. You will need to
              be able to effectively communicate your design ideas and gather
              feedback from other team members.
            </p>
          </div>

          <div>
            <h2 className="pb12 text-lg font-semibold text-gray-700">
              Educational Requirements:
            </h2>
            <p className="indent-16 text-gray-400">
              Bachelor degree to complete any reputational university.
            </p>
          </div>

          <div>
            <h2 className="pb12 text-lg font-semibold text-gray-700"></h2>
            <p className="indent-16 text-gray-400"></p>
          </div>
        </div>

        {/* job details info starts here  */}
        <div className="w-1/3 space-y-4">
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
              <img src="/public/assets/Icons/Frame-1.png" alt="" />
              <span className="font-semibold text-gray-700">Job Title :</span>
              <span className="font-medium text-gray-500">{job_title}</span>
            </div>
            <h2 className="border-spacing-2 border-b-2 border-gray-300 pb-3  text-xl font-medium text-gray-800">
              Contact Information
            </h2>
            <div className="flex space-x-2">
              <img src="/public/assets/Icons/Frame-2.png" alt="" />
              <span className="font-semibold text-gray-700">Phone :</span>
              <span className="font-medium text-gray-500">{}</span>
            </div>
            <div className="flex space-x-2">
              <img src="/public/assets/Icons/Frame-3.png" alt="" />
              <span className="font-semibold text-gray-700">Email :</span>
              <span className="font-medium text-gray-500"> info@gmail.com</span>
            </div>
            <div className="flex space-x-2">
              <img src="/public/assets/Icons/Frame-4.png" alt="" />
              <span className="font-semibold text-gray-700">Address :</span>
              <span className="font-medium text-gray-500">{location}</span>
            </div>
          </div>
          <button className="btn-primary w-full py-3">Apply Now</button>
        </div>
      </div>
    </div>
  );
};

export default FeatureJobDetails;
