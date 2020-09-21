import React from "react";
import { useHistory } from "react-router-dom";

const AdCard = ({ jobID, jobOverview, jobBannerImage, jobDetails }) => {
  const history = useHistory();

  console.log(jobBannerImage);

  return (
    <div>
      <div
        onClick={() => history.push(`/job/${jobID}`)}
        style={{ display: "flex", flexDirection: "row" }}
        className="card card-block"
      >
        <h4 className="card-title text-right"> </h4>
        <img className="cardImg" src={jobBannerImage} alt="meeting" />
        <div>
          <h3 className="card-title mt-3 mb-3">{jobOverview.jobTitle}</h3>
          <p className="card-text">{jobDetails.description.length <= 99
            ? jobDetails.description
            : jobDetails.description.slice(0, 99) + "..."}</p>
        </div>
      </div>
    </div>
  );
};

export default AdCard;
