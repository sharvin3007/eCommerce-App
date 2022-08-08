import React, { useState } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import "./filter.css";


const sizes = ["XS", "S", "M", "L", "XL"];
const defaultOption = sizes[0];

const Filter = (props) => {
  const [size, setSize] = useState(defaultOption);

  // Fetch value and pass it to parent
  const handleSelection = (e) => {
    const selectedVal = e.value
    setSize(selectedVal)
    props.typeCallback(selectedVal)
  }

  return (
    <>
      <div className="col-md-3 col-sm-1 fw-bold filterContainer">
        <Dropdown
          options={sizes}
          value={size.selectedValue}
          placeholder="Filter by size"
          onChange={handleSelection}
        />
      </div>
    </>
  );
};

export default Filter;
