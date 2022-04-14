import React from "react";

import "./style.css";

const InputLocation = () => {
  return (
    <form className="container-input-location">
      <div>
        <input type="checkbox" />
        <label className="label">Full time</label>
      </div>

      <label className="label-location">location</label>
      <input
        className="input-location"
        type="text"
        placeholder="City, state, zip code or country"
      />

      <div>
        <input className="input-radio" type="radio" value="London" />
        <label className="label">London</label>
      </div>

      <div>
        <input className="input-radio" type="radio" value="Amsterdom" />
        <label className="label">Amsterdom</label>
      </div>

      <div>
        <input className="input-radio" type="radio" value="New York" />
        <label className="label">New York</label>
      </div>

      <div>
        <input className="input-radio" type="radio" value="Berlin" />
        <label className="label">Berlin</label>
      </div>
    </form>
  );
};

export default InputLocation;
