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
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CountryDropdown } from "react-country-region-selector";
import { useHistory, useParams } from "react-router-dom";
import produce from "immer";
import { cvActions } from "../../redux/actions/cvActions";

export default function CreateCv() {
  const [formData, setFormData] = useState({
    contactInfo: {
      fullName: "as",
      dob: null,
      email: "as@as.com",
      contactNo: "as",
      nationality: "",
      address: {
        ward: "as",
        district: "as",
        city: "as",
      },
    },
    tertiaryEducation: {
      degreeType: "",
      field: "as",
      establishment: "as",
      year: null,
    },
    experience: {
      jobTitle: "as",
      employer: "as",
      beginningTime: null,
      endingTime: null,
    },
    certifications: {
      certTitle: "as",
      dateOfCompletion: null,
    },
    userImage:
      "https://res.cloudinary.com/div8ckicz/image/upload/v1600328157/finalProject/zrhjbc2fphxetauexg8w.jpg",
  });

  const [errors, setErrors] = useState({
    dob: "",
    contactNo: "",
    endingTime: "",
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

  const handleDatePicker = (d) => {
    setFormData({
      ...formData,
      contactInfo: { ...formData.contactInfo, dob: d },
    });
  };

  const handleChangeStartDate = (d) => {
    setFormData({
      ...formData,
      experience: { ...formData.experience, beginningTime: d },
    });
  };

  const handleChangeEndDate = (d) => {
    setFormData({
      ...formData,
      experience: { ...formData.experience, endingTime: d },
    });
  };

  const handleChangeDateOfCompletion = (d) => {
    setFormData({
      ...formData,
      certifications: { ...formData.certifications, dateOfCompletion: d },
    });
  };

  const handleSelectCountry = (c) => {
    setFormData({
      ...formData,
      contactInfo: { ...formData.contactInfo, nationality: c },
    });
  };

  const handleChangeFullName = (e) => {
    const fullName = e.target.value;
    setFormData((formData) =>
      produce(formData, (draft) => {
        draft.contactInfo.fullName = fullName;
      })
    );
  };

  const handleChangeEmail = (e) => {
    const email = e.target.value;
    setFormData((formData) =>
      produce(formData, (draft) => {
        draft.contactInfo.email = email;
      })
    );
  };

  const handleChangeContactNo = (e) => {
    const contactNo = e.target.value;
    setFormData((formData) =>
      produce(formData, (draft) => {
        draft.contactInfo.contactNo = contactNo;
      })
    );
  };

  const handleChangeWard = (e) => {
    const ward = e.target.value;
    setFormData((formData) =>
      produce(formData, (draft) => {
        draft.contactInfo.address.ward = ward;
      })
    );
  };

  const handleChangeDistrict = (e) => {
    const district = e.target.value;
    setFormData((formData) =>
      produce(formData, (draft) => {
        draft.contactInfo.address.district = district;
      })
    );
  };

  const handleChangeCity = (e) => {
    const city = e.target.value;
    setFormData((formData) =>
      produce(formData, (draft) => {
        draft.contactInfo.address.city = city;
      })
    );
  };

  const handleChangeDegreeType = (e) => {
    const degreeType = e.target.value;
    setFormData((formData) =>
      produce(formData, (draft) => {
        draft.tertiaryEducation.degreeType = degreeType;
      })
    );
  };

  const handleChangeField = (e) => {
    const field = e.target.value;
    setFormData((formData) =>
      produce(formData, (draft) => {
        draft.tertiaryEducation.field = field;
      })
    );
  };

  const handleChangeEstablishment = (e) => {
    const establishment = e.target.value;
    setFormData((formData) =>
      produce(formData, (draft) => {
        draft.tertiaryEducation.establishment = establishment;
      })
    );
  };

  const handleChangeEduYear = (e) => {
    const year = e.target.value;
    setFormData((formData) =>
      produce(formData, (draft) => {
        draft.tertiaryEducation.year = year;
      })
    );
  };

  const handleChangeJobTitle = (e) => {
    const jobTitle = e.target.value;
    setFormData((formData) =>
      produce(formData, (draft) => {
        draft.experience.jobTitle = jobTitle;
      })
    );
  };

  const handleChangeEmployer = (e) => {
    const employer = e.target.value;
    setFormData((formData) =>
      produce(formData, (draft) => {
        draft.experience.employer = employer;
      })
    );
  };

  const handleChangeCertTitle = (e) => {
    const certTitle = e.target.value;
    setFormData((formData) =>
      produce(formData, (draft) => {
        draft.certifications.certTitle = certTitle;
      })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const dob = formData.contactInfo.dob;
    const contactNo = +formData.contactInfo.contactNo;
    const startDate = formData.experience.beginningTime;
    const endDate = formData.experience.endingTime;

    validateDob(dob);
    validateContactNo(contactNo);
    validateWorkingPeriod(startDate, endDate);

    dispatch(cvActions.submitCv(formData));
  };

  const validateDob = (dob) => {
    const currentDate = Date.now();
    const eighteenYears = 18 * 365 * 24 * 60 * 60;
    const isValid = currentDate - dob < eighteenYears;
    if (!isValid) {
      setErrors({ ...errors, dob: "You must be older than 18" });
      return false;
    }
    return true;
  };

  const validateContactNo = (contactNo) => {
    if (isNaN(contactNo)) {
      setErrors({
        ...errors,
        contactNo: "Please enter a valid contact number",
      });
      return false;
    } else {
      setErrors({...errors, contactNo: ""});
      return true;
    }
    
  };

  const validateWorkingPeriod = (startDate, endDate) => {
    if (startDate > endDate) {
      setErrors({ ...errors, endingTime: "Please enter a valid end date" });
      return false;
    }
    return true;
  };

  const noOfYears = () => {
    let minYear = 1970;
    let date = new Date();
    let maxYear = date.getFullYear();
    let years = [];

    for (let i = minYear; i <= maxYear; i++) {
      years.push(
        <option key={i} value={formData.tertiaryEducation.year}>
          {minYear++}
        </option>
      );
    }
    return years;
  };

  return (
    <div>
      <h1>Create CV</h1>

      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="fullName">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            required
            type="text"
            name="contactInfo.fullName"
            onChange={handleChangeFullName}
            value={formData.contactInfo.fullName}
            placeholder="Enter your full name"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>DOB</Form.Label>
          <DatePicker
            required
            selected={formData.contactInfo.dob}
            onChange={handleDatePicker}
          />
          {errors.dob && (
            <small className="form-text text-danger">{errors.dob}</small>
          )}
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            required
            type="email"
            name="contactInfo.email"
            onChange={handleChangeEmail}
            value={formData.contactInfo.email}
            placeholder="Enter your email address"
          />
        </Form.Group>
        <Form.Group controlId="contactNumber">
          <Form.Label>Contact Number</Form.Label>
          <Form.Control
            minLength={10}
            maxLength={10}
            type="text"
            name="contactInfo.contactNo"
            onChange={handleChangeContactNo}
            value={formData.contactInfo.contactNo}
            placeholder="Enter your contact number"
          />
          {errors.contactNo && (
            <small className="form-text text-danger">{errors.contactNo}</small>
          )}
        </Form.Group>
        <Form.Group>
          <Form.Label>Nationality</Form.Label>
          <CountryDropdown
            required
            value={formData.contactInfo.nationality}
            onChange={(c) => handleSelectCountry(c)}
          />
        </Form.Group>
        <Form.Group controlId="ward">
          <Form.Label>Ward</Form.Label>
          <Form.Control
            type="text"
            name="contactInfo.address.ward"
            onChange={handleChangeWard}
            value={formData.contactInfo.address.ward}
            placeholder="Enter your ward"
          />
        </Form.Group>
        <Form.Group controlId="district">
          <Form.Label>District</Form.Label>
          <Form.Control
            type="text"
            name="contactInfo.address.district"
            onChange={handleChangeDistrict}
            value={formData.contactInfo.address.district}
            placeholder="Enter your district"
          />
        </Form.Group>
        <Form.Group controlId="city">
          <Form.Label>City</Form.Label>
          <Form.Control
            required
            type="text"
            name="contactInfo.address.city"
            onChange={handleChangeCity}
            value={formData.contactInfo.address.city}
            placeholder="Enter your city"
          />
        </Form.Group>
        <Form.Group controlId="degreeType">
          <Form.Label>DegreeType</Form.Label>
          <Form.Control
            required
            as="select"
            name="tertiaryEducation.degreeType"
            onChange={handleChangeDegreeType}
            value={formData.tertiaryEducation.degreeType}
            placeholder="Degree type"
          >
            <option value="doctorate">Doctorate</option>
            <option value="masters">masters</option>
            <option value="bachelors">bachelors</option>
            <option value="diploma">diploma</option>
            <option value="other">other</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="field">
          <Form.Label>Title</Form.Label>
          <Form.Control
            required
            type="text"
            name="tertiaryEducation.field"
            onChange={handleChangeField}
            value={formData.tertiaryEducation.field}
            placeholder="title"
          />
        </Form.Group>
        <Form.Group controlId="establishment">
          <Form.Label>Establishment</Form.Label>
          <Form.Control
            required
            type="text"
            name="tertiaryEducation.establishment"
            onChange={handleChangeEstablishment}
            value={formData.tertiaryEducation.establishment}
            placeholder="establishment"
          />
        </Form.Group>
        <Form.Group controlId="year">
          <Form.Label>Year</Form.Label>
          <Form.Control
            required
            as="select"
            name="tertiaryEducation.year"
            onChange={handleChangeEduYear}
            // value={formData.tertiaryEducation.year}
            placeholder="Year"
          >
            {noOfYears()}
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="jobTitle">
          <Form.Label>Job title</Form.Label>
          <Form.Control
            required
            type="text"
            name="experience.jobTitle"
            onChange={handleChangeJobTitle}
            value={formData.experience.jobTitle}
            placeholder="job title"
          />
        </Form.Group>
        <Form.Group controlId="employer">
          <Form.Label>Employer</Form.Label>
          <Form.Control
            required
            type="text"
            name="experience.employer"
            onChange={handleChangeEmployer}
            value={formData.experience.employer}
            placeholder="employer"
          />
        </Form.Group>
        <Form.Group controlId="beginningTime">
          <Form.Label>Start Date</Form.Label>
          <DatePicker
            required
            selected={formData.experience.beginningTime}
            onChange={handleChangeStartDate}
          />
        </Form.Group>
        <Form.Group controlId="endingTime">
          <Form.Label>End Date</Form.Label>
          <DatePicker
            required
            selected={formData.experience.endingTime}
            onChange={handleChangeEndDate}
          />
          {errors.endingTime && (
            <small className="form-text text-danger">{errors.endingTime}</small>
          )}
        </Form.Group>
        <Form.Group controlId="certTitle">
          <Form.Label>Certificate</Form.Label>
          <Form.Control
            required
            type="text"
            name="certifications.certTitle"
            onChange={handleChangeCertTitle}
            value={formData.certifications.certTitle}
            placeholder="certificate"
          />
        </Form.Group>
        <Form.Group controlId="dateOfCompletion">
          <Form.Label>Date of Completion</Form.Label>
          <DatePicker
            required
            selected={formData.certifications.dateOfCompletion}
            onChange={handleChangeDateOfCompletion}
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
}
