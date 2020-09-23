import React from "react";
import { useHistory } from "react-router-dom";
import { Card } from "react-bootstrap";
import moment from "moment";

const AdCard = ({ jobID, jobOverview, jobBannerImage, jobDetails, createdAt }) => {
  const history = useHistory();

  return (
    <Card onClick={() => history.push(`/job/${jobID}`)}>
      <Card.Img variant="top" src={jobBannerImage} />
      <Card.Body>
        <Card.Title>{jobOverview.jobTitle}</Card.Title>
        <Card.Text>
          {jobDetails.description.length <= 99
            ? jobDetails.description
            : jobDetails.description.slice(0, 99) + "..."}
        </Card.Text>
      </Card.Body>
     <Card.Footer>
        <small className="text-muted">
          <span className="text-muted">
            {jobOverview.employer} added this ad{" "}
            {moment(createdAt).fromNow()}
          </span>
        </small>
      </Card.Footer>
    </Card>
  );
};
export default AdCard;
