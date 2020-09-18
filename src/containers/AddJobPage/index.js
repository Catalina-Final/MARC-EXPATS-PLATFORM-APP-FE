import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';
import {
  Form,
  Button,
  // Container,
  // Row,
  // Col,
  // ButtonGroup,
} from "react-bootstrap";
import { jobActions } from "../../redux/actions/jobActions";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import produce from "immer";

const AddJobPage = () => {
  const [formData, setFormData] = useState({
    jobOwnerId: "",
    jobOverview: {
      jobTitle: "",
      salary: "",
      location: "",
      contractType: "",
      employer: "",
      startDate: "",
    },
    jobDetails: {
      description: "",
      requiredQualifications: "",
      requiredSkills: "",
      requiredCharacteristics: "",
      incentives: "",
      bonuses: "",
    },
    jobBannerImage: "",
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

  const handleChangeJobTitle = (e) => {
    const jobTitle = e.target.value;
    setFormData((formData) =>
      produce(formData, (draft) => {
        draft.jobOverview.jobTitle = jobTitle;
      })
    );
  };

  const handleChangeSalary = (e) => {
    const salary = e.target.value;
    setFormData((formData) =>
      produce(formData, (draft) => {
        draft.jobOverview.salary = salary;
      })
    );
  };

  const handleChangeLocation = (e) => {
    const location = e.target.value;
    setFormData((formData) =>
      produce(formData, (draft) => {
        draft.jobOverview.location = location;
      })
    );
  };

  const handleChangeContractType = (e) => {
    const contractType = e.target.value;
    setFormData((formData) =>
      produce(formData, (draft) => {
        draft.jobOverview.contractType = contractType;
      })
    );
  };

  const handleChangeEmployer = (e) => {
    const employer = e.target.value;
    setFormData((formData) =>
      produce(formData, (draft) => {
        draft.jobOverview.employer = employer;
      })
    );
  };

  const handleChangeStartDate = (e) => {
    setFormData({
      ...formData,
      jobOverview: { ...formData.jobOverview, startDate: e },
    });
  };

  const handleChangeDescription = (e) => {
    const description = e.target.value;
    setFormData((formData) =>
      produce(formData, (draft) => {
        draft.jobDetails.description = description;
      })
    );
  };

  const handleChangeRequiredQualifications = (e) => {
    const requiredQualifications = e.target.value;
    setFormData((formData) =>
      produce(formData, (draft) => {
        draft.jobDetails.requiredQualifications = requiredQualifications;
      })
    );
  };

  const handleChangeRequiredSkills = (e) => {
    const requiredSkills = e.target.value;
    setFormData((formData) =>
      produce(formData, (draft) => {
        draft.jobDetails.requiredSkills = requiredSkills;
      })
    );
  };

  const handleChangeRequiredCharacteristics = (e) => {
    const requiredCharacteristics = e.target.value;
    setFormData((formData) =>
      produce(formData, (draft) => {
        draft.jobDetails.requiredCharacteristics = requiredCharacteristics;
      })
    );
  };

  const handleChangeIncentives = (e) => {
    const incentives = e.target.value;
    setFormData((formData) =>
      produce(formData, (draft) => {
        draft.jobDetails.incentives = incentives;
      })
    );
  };

  const handleChangeBonuses = (e) => {
    const bonuses = e.target.value;
    setFormData((formData) =>
      produce(formData, (draft) => {
        draft.jobDetails.bonuses = bonuses;
      })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(jobActions.submitJobAd(formData));
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="jobTitle">
          <Form.Label>job title</Form.Label>
          <Form.Control
            type="text"
            name="jobOverview.jobTitle"
            onChange={handleChangeJobTitle}
            value={formData.jobOverview.jobTitle}
            placeholder="Enter job title"
          />
        </Form.Group>
        <Form.Group controlId="Salary">
          <Form.Label>salary</Form.Label>
          <Form.Control
            type="text"
            name="jobOverview.salary"
            onChange={handleChangeSalary}
            value={formData.jobOverview.salary}
            placeholder="Enter job salary"
          />
        </Form.Group>
        <Form.Group controlId="location">
          <Form.Label>location</Form.Label>
          <Form.Control
            type="text"
            name="jobOverview.location"
            onChange={handleChangeLocation}
            value={formData.jobOverview.location}
            placeholder="Enter job location"
          />
        </Form.Group>
        <Form.Group controlId="contractType">
          <Form.Label>contractType</Form.Label>
          <Form.Control
            as="select"
            name="jobOverview.contractType"
            onChange={handleChangeContractType}
            value={formData.jobOverview.contractType}
            placeholder="Contract type"
          >
            <option value="fullTime">Full-time</option>
            <option value="partTime">Part-time</option>
            <option value="shortTerm">Contract, short term</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="employer">
          <Form.Label>Employer</Form.Label>
          <Form.Control
            type="text"
            name="jobOverview.employer"
            onChange={handleChangeEmployer}
            value={formData.jobOverview.employer}
            placeholder="Enter job employer"
          />
        </Form.Group>
        <Form.Group>
          <DatePicker
            selected={formData.jobOverview.startDate}
            onChange={handleChangeStartDate}
          />
        </Form.Group>
        <Form.Group controlId="description">
          <Form.Label>description</Form.Label>
          <Form.Control
            type="text"
            name="jobOverview.description"
            onChange={handleChangeDescription}
            value={formData.jobDetails.description}
            placeholder="Enter job description"
          />
        </Form.Group>
        <Form.Group controlId="requiredQualifications">
          <Form.Label>requiredQualifications</Form.Label>
          <Form.Control
            type="text"
            name="jobOverview.requiredQualifications"
            onChange={handleChangeRequiredQualifications}
            value={formData.jobDetails.requiredQualifications}
            placeholder="Enter job required qualifications"
          />
        </Form.Group>
        <Form.Group controlId="requiredSkills">
          <Form.Label>requiredSkills</Form.Label>
          <Form.Control
            type="text"
            name="jobOverview.requiredSkills"
            onChange={handleChangeRequiredSkills}
            value={formData.jobDetails.requiredSkills}
            placeholder="Enter job requiredSkills"
          />
        </Form.Group>
        <Form.Group controlId="requiredCharacteristics">
          <Form.Label>requiredCharacteristics</Form.Label>
          <Form.Control
            type="text"
            name="jobOverview.requiredCharacteristics"
            onChange={handleChangeRequiredCharacteristics}
            value={formData.jobDetails.requiredCharacteristics}
            placeholder="Enter job required characteristics"
          />
        </Form.Group>
        <Form.Group controlId="incentives">
          <Form.Label>incentives</Form.Label>
          <Form.Control
            type="text"
            name="jobOverview.incentives"
            onChange={handleChangeIncentives}
            value={formData.jobDetails.incentives}
            placeholder="Enter job incentives"
          />
        </Form.Group>
        <Form.Group controlId="bonuses">
          <Form.Label>bonuses</Form.Label>
          <Form.Control
            type="text"
            name="jobOverview.bonuses"
            onChange={handleChangeBonuses}
            value={formData.jobDetails.bonuses}
            placeholder="Enter job bonuses"
          />
        </Form.Group>
        <Form.Group>
          <Button variant="info" onClick={uploadWidget}>
            Add an Image
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default AddJobPage;
