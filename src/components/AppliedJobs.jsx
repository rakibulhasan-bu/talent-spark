import React, { useEffect, useState } from "react";
import { getAppliedJob } from "../../public/utilities/fakedb";
import { useLoaderData } from "react-router-dom";
import AppliedSingleJob from "./AppliedSingleJob";

const AppliedJobs = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [filterShow, setFilterShow] = useState(false);
  const [allJobData, setAllJobData] = useState([]);

  const jobData = useLoaderData();
  const storedData = getAppliedJob();

  useEffect(() => {
    let jobDataArray = [];
    for (let id in storedData) {
      const foundJob = jobData.find(
        (singleJobData) => singleJobData.job_id === id
      );
      if (foundJob) {
        jobDataArray.push(foundJob);
      }
    }
    setAllJobData(jobDataArray);
  }, [filterShow]);

  const handleFilterRemote = () => {
    const remoteJob = allJobData.filter(
      (singleRemoteJob) => singleRemoteJob.employee_type === "Remote"
    );
    setAllJobData(remoteJob);
    setIsOpen(!isOpen);
  };
  const handleFilterOffline = () => {
    const offlineJob = allJobData.filter(
      (singleOfflineJob) => singleOfflineJob.employee_type === "Office"
    );
    setAllJobData(offlineJob);
    setIsOpen(!isOpen);
  };
  const handleFilterAll = () => {
    setFilterShow(!filterShow);
    setAllJobData(allJobData);
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="bg-gray-100 py-16 text-center text-5xl font-semibold text-gray-700 ">
        Applied jobs
      </div>
      <div className="my-container py-8">
        {/* filter section starts here  */}
        <div className="flex justify-end">
          <div className="relative ">
            <div
              onClick={() => setIsOpen(!isOpen)}
              className="btn-primary w-28 cursor-pointer select-none p-2"
            >
              Filter by
            </div>
            {isOpen && (
              <div className="absolute top-11 ">
                <button className="btn-outline w-28" onClick={handleFilterAll}>
                  All Data
                </button>
                <button
                  className="btn-outline w-28"
                  onClick={handleFilterRemote}
                >
                  Remote
                </button>
                <button
                  className="btn-outline w-28"
                  onClick={handleFilterOffline}
                >
                  Offline
                </button>
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-6 px-32 py-16">
          {allJobData &&
            allJobData.map((appliedSingleJobData) => (
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
