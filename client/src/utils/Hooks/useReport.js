import React from "react";
import { useQuery } from "@apollo/client";
import { categoriesOptions } from "../../components/common/Data";
import { GET_TASKS } from "../../utils/graphQL/query";

const useReport = () => {
  let dailyData;
  const { loading, error, data } = useQuery(GET_TASKS);
  if (data) {
    const tasks = data.tasks.filter((task) => {
      let date = new Date(task.date);
      return date.getDate() === new Date().getDate();
    });

    tasks.forEach((t) => {
      const category = categoriesOptions.find((c) => c.value === t.category);
      if (category) category.total += t.duration;
    });
    const filteredCategories = categoriesOptions.filter((c) => c.total > 0);
    dailyData = {
      datasets: [
        {
          data: filteredCategories.map((c) => c.total),
          backgroundColor: filteredCategories.map((c) => c.color),
        },
      ],
      labels: filteredCategories.map((c) => c.text),
    };
    localStorage.setItem("report", JSON.stringify(dailyData));
  } else {
    dailyData = JSON.parse(localStorage.getItem("report"));
  }

  return [dailyData];
};

export default useReport;
