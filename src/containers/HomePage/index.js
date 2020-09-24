import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CardColumns, Container } from "react-bootstrap";
// import { Link } from "react-router-dom";
import CoreCarousel from "../../components/CoreCarousel";
import { jobActions, employerActions } from "../../redux/actions";
import AdCard from "../../components/AdCardFinal";
import PaginationItem from "../../components/PaginationItem";
import ClipLoader from "react-spinners/ClipLoader";

const HomePage = () => {
  const dispatch = useDispatch();

  const [pageNum, setPageNum] = useState(1);
  
  const totalPageNum = useSelector((state) => state.job.totalPageNum);
  // const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const loading = useSelector((state) => state.job.loading);
  const jobList = useSelector((state) => state.job.jobList);
  const employerList = useSelector((state) => state.employer.employerList);

  // console.log("jobs", jobList)
  useEffect(() => {
    dispatch(jobActions.getJobs(pageNum));
  }, [pageNum, dispatch]);

  useEffect(() => {
    dispatch(employerActions.getEmployers());
  }, [dispatch]);

  console.log(employerList);

  const renderJobs = (arr) =>
    arr.map((e) => (
      <AdCard
        jobID={e._id}
        jobOverview={e.jobOverview}
        jobBannerImage={e.jobBannerImage}
        jobDetails={e.jobDetails}
        createdAt={e.createdAt}
      />
    ));

  return (
    <div>
        <CoreCarousel />
        <Container>

        {loading ? (
          <ClipLoader color="#f86c6b" size={150} loading={loading} />
        ) : (
          <>
            <PaginationItem
              pageNum={pageNum}
              setPageNum={setPageNum}
              totalPageNum={totalPageNum}
              loading={loading}
            />
            {jobList.length > 0 ? (
              <>
                <CardColumns>{jobList && renderJobs(jobList)}</CardColumns>
              </>
            ) : (
              <p>There are no ads</p>
            )}
          </>
        )}
      </Container>
    </div>
  );
};

export default HomePage;
