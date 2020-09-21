import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { userActions } from "../../redux/actions";
import { useParams } from "react-router-dom";
import { jobActions } from "../../redux/actions";

const JobDetailPage = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const job = useSelector((state) => state.job.jobDetails);

  console.log(job);

  const dispatch = useDispatch();

  const { id: jobID } = useParams();

  useEffect(() => {
    dispatch(jobActions.getSingleJob(jobID));
  }, []);

  //   //   recruiterID (target)
  //   //  UserLogin ID
  //   //  Cv ID
  //   //  Job Id
  //   const jobId =

  //   const handleSubmitCv = (jobId) => {
  //     dispatch(userActions.submitCv());
  //   };
  console.log(jobID);

  if (!job) return <div>Loading Job</div>
  
  return (
    <div>
      {job.jobOverview.jobTitle}
      {/* {isAuthenticated ? (
        <Button onClick={handleSubmitCv}>Submit</Button>
      ) : (
        <h1>login</h1>
      )} */}
    </div>
  );
};

export default JobDetailPage;
