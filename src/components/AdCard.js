import React from "react";
import { useHistory } from "react-router-dom";

const AdCard = ({ jobID, jobOverview, jobBannerImage }) => {
  const history = useHistory();

  return (
    <div>
      <p onClick={() => history.push(`/job/${jobID}`)}>
        {jobOverview.jobTitle}
      </p>

      <div className="card card-block">
        <h4 className="card-title text-right">
          <i className="material-icons">settings</i>
        </h4>
        <img className="cardImg"
          src={jobBannerImage}
          alt="meeting"
        />
        <h5 className="card-title mt-3 mb-3">Sierra Web Development • Owner</h5>
        <p className="card-text">
          This is a company that builds websites, web apps and e-commerce
          solutions.
        </p>
      </div>
    </div>
  );
};

export default AdCard;
