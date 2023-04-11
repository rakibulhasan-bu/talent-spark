import React from "react";
import { getShoppingCart } from "../../public/utilities/fakedb";
import { useLoaderData } from "react-router-dom";
import AppliedSingleJob from "./AppliedSingleJob";

const AppliedJobs = () => {
  const jobData = useLoaderData();
  const storedData = getShoppingCart();

  let jobDataArray = [];
  for (let id in storedData) {
    const foundJob = jobData.find(
      (singleJobData) => singleJobData.job_id === id
    );
    if (foundJob) {
      jobDataArray.push(foundJob);
    }
  }
  console.log(jobDataArray);
  return (
    <div>
      <div className="title py-16">Applied jobs</div>
      <div className="my-container py-12">
        <div className="flex justify-end">
          <p>filter by</p>
        </div>
        <div className="p-12">
          {jobDataArray &&
            jobDataArray.map((appliedSingleJobData) => (
              <AppliedSingleJob
                appliedSingleJobData={appliedSingleJobData}
                key={appliedSingleJobData.job_id}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default AppliedJobs;
