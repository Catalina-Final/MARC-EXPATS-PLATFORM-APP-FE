import React from "react";
import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { userActions } from "../../redux/actions";
import {useParams} from "react-router-dom";
const JobDetailPage = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const dispatch = useDispatch();

    const {id: jobID} = useParams()
//   useEffect()
//   //   recruiterID (target)
//   //  UserLogin ID
//   //  Cv ID
//   //  Job Id
//   const jobId = 

//   const handleSubmitCv = (jobId) => {
//     dispatch(userActions.submitCv());
//   };
  console.log(jobID)
  return (
    <div>
        hello
      {/* {isAuthenticated ? (
        <Button onClick={handleSubmitCv}>Submit</Button>
      ) : (
        <h1>login</h1>
      )} */}
    </div>
  );
};

export default JobDetailPage;
