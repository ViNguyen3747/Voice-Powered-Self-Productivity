import React from "react";
import { Image, Checkbox, Icon } from "semantic-ui-react";
import { priorityOptions } from "../../common/Data";
import "./TaskCard.css";
const TaskDetail = ({ task, setCurrentId }) => {
  const color = priorityOptions.find((p) => {
    return p.value === task.priorityLevel;
  });
  const handleChange = () => {
    setCurrentId(task.id);
    
  };
  //add Delete_Task function
  

  return (
    <div className="task-detail" style={{ backgroundColor: `#${color.color}` }}>
      <Checkbox />
      <div className="task-name">{task.name}</div>
      <div>
        <Icon
          color="white"
          className="icon"
          name="pencil alternate"
          onClick={handleChange}
        />
        <Icon color="white" className="icon" name="trash alternate" />
      </div>
    </div>
  );
};
const index = ({ category, tasks, setCurrentId }) => {
  console.log(tasks);
  return (
    <div className="card-container">
      <h2>{category.value}</h2>
      <Image
        src={category.illustration}
        size="small"
        centered
        alt={category.value}
      />
      {tasks.map((task) => (
        <div className="task-container">
          <TaskDetail task={task} setCurrentId={setCurrentId} />
        </div>
      ))}
    </div>
  );
};

export default index;
