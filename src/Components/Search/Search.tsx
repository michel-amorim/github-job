import React from "react";
import "./style.css";

import Input from "./Input/Input";
import Button from "./Button/Button";

const Search = () => {
  return (
    <div className="container-search">
      <div className="container-input">
        <Input />
        <Button />
      </div>
    </div>
  );
};

export default Search;
