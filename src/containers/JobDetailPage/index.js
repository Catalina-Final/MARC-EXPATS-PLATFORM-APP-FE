import React, { useState, useEffect } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { jobActions } from "../../redux/actions";
import { Button } from "react-bootstrap";
import { ClipLoader } from "react-spinners";
import Moment from "react-moment";
import Markdown from "react-markdown";

const JobDetailPage = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const job = useSelector((state) => state.job.jobDetails);
  const loading = useSelector((state) => state.job.loading);
  // const currentUser = useSelector((state) => state.auth.user);
  const submitLoading = useSelector((state) => state.job.subCVLoading);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const history = useHistory();

  const handleSubmitCv = (e) => {
    e.preventDefault();
    dispatch(jobActions.submitCv(params.id));
  };

  useEffect(() => {
    if (params?.id) {
      dispatch(jobActions.getSingleJob(params.id));
    }
  }, [dispatch, params]);

  const handleGoBackClick = (e) => {
    history.goBack();
  };

  return (
    <>
      <div className="d-flex justify-content-between">
        <Button onClick={handleGoBackClick}>Back</Button>
      </div>
      {loading ? (
        <ClipLoader color="#f86c6b" size={150} loading={loading} />
      ) : (
        <>
          {job && (
            <div className="mb-5">
              <h4>{job.jobOverview.title}</h4>

              <span className="text-muted">
                @{job.jobOverview.employer} created this ad{" "}
                <Moment fromNow>{job.createdAt}</Moment>
              </span>

              <hr />
              <p>{job.jobOverview.salary}</p>
              <p>{job.jobOverview.location}</p>
              <p>{job.jobOverview.contractType}</p>
              <p>{job.jobOverview.employer}</p>
              <p>{job.jobOverview.startDate}</p>
              <p>{job.jobDetails.description}</p>
              <p>{job.jobDetails.requiredQualifications}</p>
              <p>{job.jobDetails.requiredSkills}</p>
              <p>{job.jobDetails.requiredCharacteristics}</p>
              <p>{job.jobDetails.incentives}</p>
              <p>{job.jobDetails.bonuses}</p>
              <hr />
              
            </div>
          )}

          {isAuthenticated && (
            <Button onClick={handleSubmitCv}>
              Submit CV
            </Button>
          )}
        </>
      )}
    </>
  );
};

export default JobDetailPage;
