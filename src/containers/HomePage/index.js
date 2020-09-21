import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import JumboSlider from "../../components/JumboSlider";
import { jobActions } from "../../redux/actions";
import AdCard from "../../components/AdCard"
const HomePage = () => {

  const dispatch = useDispatch();

  const jobList = useSelector((state) => state.job.jobList)
  // console.log("jobs", jobList)
  useEffect(() => {
    dispatch(jobActions.getJobs());
  }, []);

  const renderJobs = arr => arr.map(e =>  <AdCard 
    jobID={e._id} 
    jobOverview={e.jobOverview}
    jobBannerImage={e.jobBannerImage}
    jobDetails={e.jobDetails}
    /> )
  return (
    <div>
      <JumboSlider />
      <h1>Home</h1>
      {jobList && renderJobs(jobList)}
    </div>
  );
};

export default HomePage;
