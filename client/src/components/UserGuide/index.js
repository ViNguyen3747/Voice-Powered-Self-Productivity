import React from "react";
import "./UserGuide.css";
import Goals from "./Goals";
import { Guide } from "./Guide";
import Signin from "./Signin";

const index = () => {
  return (
    <>
      <Goals />
      <Guide />
      <Signin />
    </>
  );
};

export default index;
