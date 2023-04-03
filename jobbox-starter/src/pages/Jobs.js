import React from "react";
import JobCard from "../components/reusable/JobCard";
import { useGetJobsQuery } from "../features/RTK_Query_Api";

const Jobs = () => {
  // const { data } = useGetJobsQuery(null, {pollingInterval: 500}) // [it will fetch after 500 ms every times]
  // const { data } = useGetJobsQuery(null, {refetchOnMountOrArgChange: true}) // jokon component mount hobe tokon refetch korbe
  const { data } = useGetJobsQuery(null,) // taratari o der k mokti kora dorkar
  return (
    <div className='pt-14'>
      <div className='bg-primary/10 p-5 rounded-2xl'>
        <h1 className='font-semibold text-xl'>Find Jobs</h1>
      </div>
      <h1 className="text-2xl font-bold">RTK Query number =  [rtk queryn & normal toolkit use and fetching = onAuthenticStarter.]</h1>
      <div className='grid grid-cols-2 gap-5 mt-5'>
        {data?.data && data?.data?.map(job => <JobCard jobData={job} />)}
      </div>
    </div>
  );
};

export default Jobs;
