import React from "react";
import Card from "./Card";

const Cards = ({ showItems }) => {
  return (
    <div className="cards">
      {showItems.map((item) => (
        <Card key={item.id} {...item} />
      ))}
    </div>
  );
};

export default Cards;
