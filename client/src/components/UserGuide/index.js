import React from "react";
import "../common/Styles/commonStyles.css";
import "./UserGuide.css";
import Goals from "./Goals";
import { Guide } from "./Guide";

const index = () => {
  return (
    <>
      <Goals />
      <Guide />
    </>
  );
};

export default index;
