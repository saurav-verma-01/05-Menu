import React from "react";

const Filter = ({ category, onClick }) => {
  return (
    <button className="filter-btn" onClick={onClick}>
      {category}
    </button>
  );
};

export default Filter;
