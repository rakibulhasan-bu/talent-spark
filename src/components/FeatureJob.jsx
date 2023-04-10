import React from "react";
import { Link } from "react-router-dom";

const FeatureJob = ({ singleJob }) => {
  const {
    company_name,
    company_logo,
    employee_type,
    employment_type,
    job_title,
    job_id,
    location,
    salary_range,
  } = singleJob;
  return (
    <div className="space-y-3 rounded-lg border border-gray-400 p-8 hover:bg-gray-50">
      <img
        className="aspect-video h-20 object-contain"
        src={company_logo}
        alt=""
      />
      <h2 className="text-xl font-semibold text-gray-800">{job_title}</h2>
      <p className="font-medium text-gray-700">{company_name}</p>
      <div className="space-x-4">
        <button className="btn-outline">{employee_type}</button>
        <button className="btn-outline">{employment_type}</button>
      </div>
      <div className="flex gap-8 font-medium text-gray-700">
        <p className="flex gap-2">
          <img src="/public/assets/Icons/Location Icon.png" alt="" /> {location}
        </p>
        <p className="flex space-x-2 font-medium text-gray-600">
          <img src="/public/assets/Icons/Frame.png" alt="" />
          <span>Salary:</span>
          <span>{salary_range}</span>
        </p>
      </div>
      <div className="py-2">
        <Link to="/featureJob-details/id" className="btn-primary py-2">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default FeatureJob;
