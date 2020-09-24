import React, {useEffect} from "react";
import { Modal, Button, Table } from "react-bootstrap";

const CvModal = ({ applicants, handleClose }) => {

  const names = applicants.map((item) => item.contactInfo.fullName);
  const dobs = applicants.map((item) => item.contactInfo.dob);

  const nationalities = applicants.map((item) => item.contactInfo.nationality);
  const districts = applicants.map((item) => item.contactInfo.address.district);
  const cities = applicants.map((item) => item.contactInfo.address.city);

  const degrees = applicants.map((item) => item.tertiaryEducation.degreeType);
  const fields = applicants.map((item) => item.tertiaryEducation.field);
  const establishments = applicants.map(
    (item) => item.tertiaryEducation.establishment
  );
  const years = applicants.map((item) => item.tertiaryEducation.year);

  const jobTitles = applicants.map((item) => item.experience[0].jobTitle);
  const employers = applicants.map((item) => item.experience[0].employer);

  const certTitles = applicants.map((item) => item.certifications[0].certTitle);
  const dateOfCompletions = applicants.map(
    (item) => item.certifications[0].dateOfCompletion
  );

  const renderContactButtons = (total) => {
    console.log("total", total);
    
        return total.map(e => <td>
          <Button>Contact</Button>
        </td>
      );

  };


  return (
    <div>
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          Compare CVs
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>#</th>
              {names.map((name, i) => (
                <th key={i}>{name}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>DOB</td>
              {dobs.map((date, i) => (
                <td key={i}>{date}</td>
              ))}
            </tr>
            <tr>
              <td>Nationality</td>
              {nationalities.map((nationality, i) => (
                <td key={i}>{nationality}</td>
              ))}
            </tr>
            <tr>
              <td>District</td>
              {districts.map((district, i) => (
                <td key={i}>{district}</td>
              ))}
            </tr>
            <tr>
              <td>City</td>
              {cities.map((city, i) => (
                <td key={i}>{city}</td>
              ))}
            </tr>
            <tr>
              <td>Degree</td>
              {degrees.map((degree, i) => (
                <td key={i}>{degree}</td>
              ))}
            </tr>
            <tr>
              <td>Field</td>
              {fields.map((field, i) => (
                <td key={i}>{field}</td>
              ))}
            </tr>
            <tr>
              <td>Establishment</td>
              {establishments.map((establishment, i) => (
                <td key={i}>{establishment}</td>
              ))}
            </tr>
            <tr>
              <td>Year</td>
              {years.map((year, i) => (
                <td key={i}>{year}</td>
              ))}
            </tr>
            <tr>
              <td>Job Experience</td>
              {jobTitles.map((jobTitle, i) => (
                <td key={i}>{jobTitle}</td>
              ))}
            </tr>
            <tr>
              <td>Employer</td>
              {employers.map((employer, i) => (
                <td key={i}>{employer}</td>
              ))}
            </tr>
            <tr>
              <td>Certificate</td>
              {certTitles.map((certTitle, i) => (
                <td key={i}>{certTitle}</td>
              ))}
            </tr>
            <tr>
              <td>Completed</td>
              {dateOfCompletions.map((dateOfCompletion, i) => (
                <td key={i}>{dateOfCompletion.slice(0, 7)}</td>
              ))}
            </tr>
            <tr>
              <td>Interested?</td>
              { renderContactButtons(applicants)}
            </tr>
          </tbody>
        </Table>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleClose}>Close</Button>
      </Modal.Footer>
      ={" "}
    </div>
  );
};

export default CvModal;
