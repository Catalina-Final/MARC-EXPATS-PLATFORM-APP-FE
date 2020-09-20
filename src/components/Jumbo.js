import React from "react";
import { Jumbotron, Button, InputGroup, FormControl } from "react-bootstrap";
import JumboSlider from "./JumboSlider";

const Jumbo = () => {
  return (
    <div>
      <Jumbotron>
        <JumboSlider />
        <h1>Hello, world!</h1>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Search"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <InputGroup.Append>
            <Button variant="outline-secondary">Search</Button>
          </InputGroup.Append>
        </InputGroup>
        <p>
          <Button variant="primary">Learn more</Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default Jumbo;
