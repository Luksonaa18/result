import React from "react";
import './content.css'
const Content = () => {
  return (
    <div className="purple-div">
      <span>Your Result</span>
      <div className="circle">
        <h1>76</h1>
        <p>of 100</p>
      </div>
      <div className="text-info">
      <h2>Great</h2>
      <span>
        Your performance exceed 65% of the people conducting the test here!
      </span>
      </div>
    </div>
  );
};

export default Content;
