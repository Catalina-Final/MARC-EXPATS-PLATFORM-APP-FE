import React, { useState, useEffect } from "react";
import SearchItem from "../../../components/SearchFunction";
import PaginationItem from "../../../components/PaginationItem";
import { useSelector, useDispatch } from "react-redux";
import { userActions } from "../../../redux/actions";
import { Row, Col, Container, Table } from "react-bootstrap";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams, Link } from "react-router-dom";
import Moment from "react-moment";

const JobAppsPage = () => {
  const [pageNum, setPageNum] = useState(1);
  const [searchInput, setSearchInput] = useState("");
  const [ setSortBy] = useState({ key: "", ascending: -1 });
  const [ setQuery] = useState("");
  const dispatch = useDispatch();
  const params = useParams();
  const loading = useSelector((state) => state.job.loading);
  const jobs = useSelector((state) => state.user.jobApplications);
  // const currentUser = useSelector((state) => state.auth.user);
  const totalPageNum = useSelector((state) => state.job.totalPageNum);

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };
  const handleSubmitSearch = (e) => {
    e.preventDefault();
    setPageNum(1);
    setQuery(searchInput);
    // dispatch(blogActions.blogsRequest(1));
  };

  const handleSort = (key) => {
    if (!loading) {
      setSortBy((sortBy) => ({
        key,
        ascending: -sortBy.ascending,
      }));
    }
  };

  useEffect(() => {
    dispatch(userActions.getJobApps(params.id));
  }, [dispatch, params.id]);

  if (!jobs) return <></>;
  return (
    <Container fluid>
      <h4 className="mt-3">View Job Applications</h4>
      <Row>
        <Col md={4}>
          <SearchItem
            searchInput={searchInput}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmitSearch}
            loading={loading}
          />
        </Col>
        <Col
          md={4}
          className="d-flex justify-content-end align-items-start"
        ></Col>
        <Col
          md={4}
          className="d-flex justify-content-end align-items-start"
        ></Col>
      </Row>
      <Row>
        <Col>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th
                  className="mouse-hover"
                  onClick={() => handleSort("jobTitle")}
                >
                  Job Title
                </th>
                <th>Employer</th>
                <th
                  className="mouse-hover"
                  onClick={() => handleSort("salary")}
                >
                  Salary
                </th>
                <th>City</th>
                <th>Created At</th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((job) => (
                <tr key={job._id}>
                  <td>
                    <Link to={`/admin/jobs/${job._id}`}>
                      {job.jobOverview.jobTitle}
                    </Link>
                  </td>
                  <td>{job.jobOverview.employer}</td>
                  <td>{job.jobOverview.salary}</td>
                  <td>{job.jobOverview.location}</td>
                  <td>
                    <Moment fromNow>{job.createdAt}</Moment>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
      <Row>
        <Col>
          <PaginationItem
            pageNum={pageNum}
            setPageNum={setPageNum}
            totalPageNum={totalPageNum}
            loading={loading}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default JobAppsPage;
