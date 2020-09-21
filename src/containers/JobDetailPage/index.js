import React from "react";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";

const JobDetailPage = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  console.log(isAuthenticated);

  const handleSubmitCV = () => {
    // dispatch(userActions.applyForJob())
  };

  return (
    <div>
      {isAuthenticated ? (
        <Button onClick={handleSubmitCV}>Submit</Button>
      ) : (
        <h1>login</h1>
      )}
    </div>
  );
};

export default JobDetailPage;
