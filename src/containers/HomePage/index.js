import React from "react";
import { Link } from "react-router-dom";
import JumboSlider from "../../components/JumboSlider";

const HomePage = () => {
  return (
    <div>
      <JumboSlider />
      <h1>Home</h1>
      <Link as={Link} to="/job/1">jobs</Link>
    </div>
  );
};

export default HomePage;
