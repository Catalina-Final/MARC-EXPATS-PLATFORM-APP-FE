import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { jobActions } from "../../../redux/actions";
import { ClipLoader } from "react-spinners";
import Moment from "react-moment";
import CvModal from "../../../components/CvModal";
import { Modal, Button, Form } from "react-bootstrap";

const EmployerJobPage = () => {
  // for modal
  const [modalShow, setModalShow] = React.useState(false);
  const [applicantArray, setApplicantArray] = React.useState([]);

  const params = useParams();
  const dispatch = useDispatch();
  const job = useSelector((state) => state.job.fullJobDetails);
  const loading = useSelector((state) => state.job.loading);
  // const currentUser = useSelector((state) => state.auth.user);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const history = useHistory();

  const handleDeleteJob = (jobId) => {
    // TODO : popup confirmation modal
    dispatch(jobActions.deleteJob(jobId));
  };

  const handleEditJob = (e) => {
    e.preventDefault();
    dispatch(jobActions.submitCv(params.id));
  };

  const handleApplicantArray = (e) => {
    const bar = job.applicants.find((el) => el._id === e);
    const idx = applicantArray.findIndex((el) => el._id === e); // real idx or -1
    if (idx === -1) {
      setApplicantArray([...applicantArray, bar]);
    } else {
      const foo = applicantArray.filter((_, index) => index !== idx);
      setApplicantArray(foo);
    }
  };
  console.log(applicantArray);
  const handleGetCvData = () => {
    setModalShow(!modalShow);
  };

  useEffect(() => {
    if (params?.id) {
      dispatch(jobActions.getSingleJobWithApplicants(params.id));
    }
  }, [dispatch, params]);

  const handleGoBackClick = (e) => {
    history.goBack();
  };

  if (!job) return <></>;
  return (
    <>
      <Modal
        show={modalShow}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <CvModal
          applicants={applicantArray}
          handleClose={() => setModalShow(false)}
        />
      </Modal>{" "}
      <div className="d-flex justify-content-between">
        <Button onClick={handleGoBackClick}>Back</Button>
      </div>
      {loading ? (
        <ClipLoader color="#f86c6b" size={150} loading={loading} />
      ) : (
        <>
          {job && (
            <div className="mb-5">
              <h4>{job.jobOverview?.jobTitle}</h4>

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

              {job.applicant ? (
                <Form onChange={(e) => handleApplicantArray(e.target.value)}>
                  <ul>
                    {job.applicants.map((applicant) => (
                      <li key={applicant._id}>
                        {applicant.contactInfo.fullName}

                        <Form.Check
                          value={applicant._id}
                          inline
                          aria-label="option 1"
                        />
                      </li>
                    ))}
                  </ul>
                </Form>
              ) : (
                <h4>There are no applicants</h4>
              )}
            </div>
          )}

          {isAuthenticated && <Button onClick={handleEditJob}>Edit</Button>}
          {isAuthenticated && (
            <Button onClick={() => handleGetCvData(applicantArray)}>
              Compare CVs
            </Button>
          )}
          {isAuthenticated && (
            <Button onClick={() => handleDeleteJob(params.id)}>
              Delete Job
            </Button>
          )}
        </>
      )}
    </>
  );
};

export default EmployerJobPage;
