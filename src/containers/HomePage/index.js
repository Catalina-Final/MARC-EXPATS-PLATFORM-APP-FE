import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {CContainer, CCol, CRow} from "@coreui/react"
import { Link } from "react-router-dom";
import CoreCarousel from "../../components/CoreCarousel";
import { jobActions } from "../../redux/actions";
import AdCard from "../../components/AdCard";
const HomePage = () => {
  const dispatch = useDispatch();

  const jobList = useSelector((state) => state.job.jobList);

  // console.log("jobs", jobList)
  useEffect(() => {
    dispatch(jobActions.getJobs());
  }, []);

  const renderJobs = (arr) =>
    arr.map((e) => (
      <CCol xs="12" xl="6">
        <AdCard
          jobID={e._id}
          jobOverview={e.jobOverview}
          jobBannerImage={e.jobBannerImage}
          jobDetails={e.jobDetails}
        />
      </CCol>
    ));

  return (
    <div>
      <CContainer>
        <CoreCarousel />
      </CContainer>
      <CContainer>
        <CRow>{jobList && renderJobs(jobList)}</CRow>
      </CContainer>
    </div>
  );
};

export default HomePage;
