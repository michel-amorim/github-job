import React from "react";

import "./style.css";
import InputLocation from "./Input/Input";
import FullTime from "../FullTime/Fulltime";
import Posts from "../Posts/Posts";

const Location: React.FC = () => {
  return (
    <div className="location">
      <div>
        <FullTime />
        <InputLocation />
      </div>
      <Posts />
    </div>
  );
};

export default Location;
