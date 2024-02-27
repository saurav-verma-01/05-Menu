import React from "react";

const Card = ({ img, desc, title, price }) => {
  return (
    <div className="card">
      <div className="top">
        <img src={img} alt={title} />
      </div>
      <div className="bottom">
        <div>
          <h2 className="card-title">{title}</h2>
          <div className="card-price">{price}</div>
        </div>
        <p className="card-desc">{desc}</p>
      </div>
    </div>
  );
};

export default Card;
