import React from "react";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const sizes = ["XS", "S", "M", "L", "XL"];
const defaultOption = sizes[0];

const Filter = () => {

  return (
    <Dropdown options={sizes} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" />
  );
};

export default Filter;
