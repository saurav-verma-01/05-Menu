import React from "react";
import Filter from "./Filter";

const Filters = ({ categories }) => {
  return (
    <div className="filters">
      {categories.map((cat) => (
        <Filter key={cat} cat={cat} />
      ))}
    </div>
  );
};

export default Filters;
