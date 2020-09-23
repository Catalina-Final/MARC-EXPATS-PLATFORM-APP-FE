import React from "react";
import { useHistory } from "react-router-dom";

const CompanyCard = ({
  recruiterId,
  companyLogo,
  companyName,
  recruiterRating
}) => {
  const history = useHistory();

  return (
    <div onClick={() => history.push(`/employer/${recruiterId}`)}>
      <h4>{companyName}</h4>
     
    </div>
  );
};

export default CompanyCard;
