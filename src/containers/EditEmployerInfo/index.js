import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { employerActions } from "../../redux/actions";
import produce from "immer";

const EmployerInfo = () => {
  const [formData, setFormData] = useState({
    companyName: "as",
    companyLocation: "as",
    companyLogo: "as",
    companyWebsite: "www.as.com",
    recruiterName: "as",
    // recruiterRating: "2.5",
    // recruiterJobs: [],
  });

  const dispatch = useDispatch();

  const uploadWidget = () => {
    window.cloudinary.openUploadWidget(
      {
        cloud_name: process.env.REACT_APP_CLOUDINARY_CLOUD_NAME,
        upload_preset: process.env.REACT_APP_CLOUDINARY_PRESET,
        tags: ["cvPhoto"],
      },
      function (error, result) {
        // console.log(result);
        if (result && result.event === "success") {
          setFormData({
            ...formData,
            userImage: result.info.secure_url,
          });
        }
      }
    );
  };

  const handleChangeCompanyName = (e) => {
    const companyName = e.target.value;
    setFormData((formData) =>
      produce(formData, (draft) => {
        draft.companyName = companyName;
      })
    );
  };

  const handleChangeCompanyLocation = (e) => {
    const companyLocation = e.target.value;
    setFormData((formData) =>
      produce(formData, (draft) => {
        draft.companyLocation = companyLocation;
      })
    );
  };

  const handleChangeCompanyWebsite = (e) => {
    const companyWebsite = e.target.value;
    setFormData((formData) =>
      produce(formData, (draft) => {
        draft.companyWebsite = companyWebsite;
      })
    );
  };

  const handleChangeRecruiterName = (e) => {
    const recruiterName = e.target.value;
    setFormData((formData) =>
      produce(formData, (draft) => {
        draft.recruiterName = recruiterName;
      })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(employerActions.updateEmployerInfo(formData));
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="companyName">
          <Form.Label>companyName</Form.Label>
          <Form.Control
            type="text"
            name="companyName"
            onChange={handleChangeCompanyName}
            placeholder="companyName"
          />
        </Form.Group>
        <Form.Group controlId="companyLocation">
          <Form.Label>companyLocation</Form.Label>
          <Form.Control
            type="text"
            name="companyLocation"
            onChange={handleChangeCompanyLocation}
            placeholder="companyLocation"
          />
        </Form.Group>
        <Form.Group controlId="companyWebsite">
          <Form.Label>companyWebsite</Form.Label>
          <Form.Control
            type="email"
            name="companyWebsite"
            onChange={handleChangeCompanyWebsite}
            placeholder="companyWebsite"
          />
        </Form.Group>
        <Form.Group controlId="recruiterName">
          <Form.Label>recruiterName</Form.Label>
          <Form.Control
            type="text"
            name="recruiterName"
            onChange={handleChangeRecruiterName}
            placeholder="recruiterName"
          />
        </Form.Group>
        <Form.Group>
          <Button variant="info" onClick={uploadWidget}>
            Add an Image
          </Button>
        </Form.Group>
        <Form.Group>
          <Button variant="info" type="submit">
            Submit
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default EmployerInfo;
