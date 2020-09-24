import React from "react";
import { Form, Col } from "react-bootstrap";
import {CButton} from "@coreui/react"

const SearchItem = ({
  searchInput,
  handleInputChange,
  handleSubmit,
  loading,
}) => {
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Row>
        <Col>
          <Form.Control
            id="search-input"
            type="text"
            placeholder="Search.."
            value={searchInput}
            onChange={handleInputChange}
          />
        </Col>
        {loading ? (
          <CButton variant="primary" type="button" disabled>
            <span
              className="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
            ></span>
            Searching...
          </CButton>
        ) : (
          <CButton color="light" className="my-2 my-sm-0" type="submit">Search</CButton>
        )}
      </Form.Row>
    </Form>
  );
};

export default SearchItem;


             