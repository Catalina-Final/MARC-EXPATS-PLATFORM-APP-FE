import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';
import {
  Form,
  Button,
  Container,
  Row,
  Col,
  ButtonGroup,
} from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CountryDropdown } from "react-country-region-selector";
import { useHistory, useParams } from "react-router-dom";

export default function CreateCv() {
  const [formData, setFormData] = useState({
    contactInfo: {
      fullName: "",
      dob: null,
      email: "",
      contactNo: null,
      nationality: "",
      address: {
        streetNo: "",
        streetName: "",
        ward: "",
        district: "",
        city: "",
      },
    },
    tertiaryEducation: {
      degreeType: "",
      field: "",
      establishment: "",
      year: null,
    },
    experience: {
      jobTitle: "",
      employer: "",
      beginningTime: null,
      endingTime: null,
    },
    certifications: {
      certTitle: "",
      dateOfCompletion: null,
    },
    userImage: "",
  });

  const uploadWidget = () => {
    window.cloudinary.openUploadWidget(
      {
        cloud_name: process.env.REACT_APP_CLOUDINARY_CLOUD_NAME,
        upload_preset: process.env.REACT_APP_CLOUDINARY_PRESET,
        tags: ["socialBlog", "blogImages"],
      },
      function (error, result) {
        if (result && result.length) {
          setFormData({
            ...formData,
            images: result.map((res) => res.secure_url),
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

  const handleSelectCountry = (c) => {
    setFormData({
      ...formData,
      contactInfo: { ...formData.contactInfo, nationality: c },
    });
  };

  const noOfYears = () => {
    let minYear = 1970;
    let date = new Date();
    let maxYear = date.getFullYear();
    let years = [];

    for (let i = minYear; i <= maxYear; i++) {
      years.push(<option value="year">{minYear++}</option>);
    }
    return years;
  };

  return (
    <div>
      <h1>Create CV</h1>

      <Form>
        <Form.Group controlId="fullName">
          <Form.Label>Full Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your full name" />
        </Form.Group>
        <DatePicker
          selected={formData.contactInfo.dob}
          onChange={handleDatePicker}
        />
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="text" placeholder="Enter your email address" />
        </Form.Group>
        <Form.Group controlId="contactNumber">
          <Form.Label>Contact Number</Form.Label>
          <Form.Control type="text" placeholder="Enter your contact number" />
        </Form.Group>
        <CountryDropdown
          value={formData.contactInfo.nationality}
          onChange={(c) => handleSelectCountry(c)}
        />
        <Form.Group controlId="ward">
          <Form.Label>Ward</Form.Label>
          <Form.Control type="text" placeholder="Enter your ward" />
        </Form.Group>
        <Form.Group controlId="district">
          <Form.Label>District</Form.Label>
          <Form.Control type="text" placeholder="Enter your district" />
        </Form.Group>
        <Form.Group controlId="city">
          <Form.Label>Ward</Form.Label>
          <Form.Control type="text" placeholder="Enter your city" />
        </Form.Group>
        <Form.Group controlId="degreeType">
          <Form.Label>DegreeType</Form.Label>
          <Form.Control as="select" placeholder="Degree type">
            <option value="doctorate">Doctorate</option>
            <option value="masters">masters</option>
            <option value="bachelors">bachelors</option>
            <option value="diploma">diploma</option>
            <option value="other">other</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="field">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="title" />
        </Form.Group>
        <Form.Group controlId="establishment">
          <Form.Label>Establishment</Form.Label>
          <Form.Control type="text" placeholder="establishment" />
        </Form.Group>
        <Form.Group controlId="year">
          <Form.Label>Year</Form.Label>
          <Form.Control as="select" placeholder="Year">
            {noOfYears()}
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="jobTitle">
          <Form.Label>Job title</Form.Label>
          <Form.Control type="text" placeholder="job title" />
        </Form.Group>
        <Form.Group controlId="employer">
          <Form.Label>Employer</Form.Label>
          <Form.Control type="text" placeholder="employer" />
        </Form.Group>
        <Form.Group controlId="beginningTime">
          <Form.Label>Start Date</Form.Label>
          <DatePicker
            selected={formData.experience.beginningTime}
            onChange={handleDatePicker}
          />
        </Form.Group>
        <Form.Group controlId="endingTime">
          <Form.Label>End Date</Form.Label>
          <DatePicker
            selected={formData.experience.endintTime}
            onChange={handleDatePicker}
          />
        </Form.Group>
        <Form.Group controlId="certTitle">
          <Form.Label>Certificate</Form.Label>
          <Form.Control type="text" placeholder="certificate" />
        </Form.Group>
        <Form.Group controlId="dateOfCompletion">
          <Form.Label>Date of Completion</Form.Label>
          <DatePicker
            selected={formData.certifications.dateOfCompletion}
            onChange={handleDatePicker}
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
}
