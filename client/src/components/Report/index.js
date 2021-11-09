import React, { useState } from "react";
import { Pie } from "react-chartjs-2";
import "./Report.css";
import "../common/Styles/commonStyles.css";
import { categoriesOptions } from "../common/Data";

const Report = ({ data }) => {
  const tasks = data.tasks;
  const total = tasks.reduce((acc, currVal) => (acc += currVal.duration), 0);

  tasks.forEach((t) => {
    const category = categoriesOptions.find((c) => c.value === t.category);
    if (category) category.total += t.duration;
  });
  const filteredCategories = categoriesOptions.filter((c) => c.total > 0);
  const charData = {
    datasets: [
      {
        data: filteredCategories.map((c) => c.total),
        backgroundColor: filteredCategories.map((c) => c.color),
      },
    ],
    labels: filteredCategories.map((c) => c.text),
  };

  return (
    <div className="chart-container">
      <Pie data={charData} />
    </div>
  );
};

export default Report;
