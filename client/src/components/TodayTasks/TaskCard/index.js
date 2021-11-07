import React from "react";
import { Image } from "semantic-ui-react";

import "./TaskCard.css";
const index = ({ category }) => {
  return (
    <div className="card-container">
      <h2>{category.value}</h2>
      <Image
        src={category.illustration}
        size="small"
        centered
        alt={category.value}
      />
    </div>
  );
};

export default index;
