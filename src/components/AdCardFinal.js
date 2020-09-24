import React from "react";
import { useHistory } from "react-router-dom";
import moment from "moment";

const AdCardFinal = ({
  jobID,
  jobOverview,
  jobBannerImage,
  jobDetails,
  createdAt,
}) => {
  const history = useHistory();

  return (
    <div>
      <div class="container">
        <div class="card-group vgr-cards">
          <div class="card" onClick={() => history.push(`/job/${jobID}`)}>
            <div class="card-img-body">
              <img
                class="card-img"
                src="https://picsum.photos/500/230"
                alt="Card cap"
              />
              <div class="card-body">
                <h4 class="card-title">{jobOverview.jobTitle}</h4>
                <p class="card-text">
                  {jobDetails.description.length <= 99
                    ? jobDetails.description
                    : jobDetails.description.slice(0, 99) + "..."}
                </p>
                <span className="text-muted">
                  {jobOverview.employer} added this ad{" "}
                  {moment(createdAt).fromNow()}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdCardFinal;
