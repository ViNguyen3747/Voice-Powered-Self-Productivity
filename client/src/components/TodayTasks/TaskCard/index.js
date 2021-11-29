import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { DELETE_TASK } from "../../../utils/graphQL/mutation";
import {
  Image,
  Checkbox,
  Icon,
  Button,
  Header,
  Modal,
} from "semantic-ui-react";
import { priorityOptions } from "../../common/Data";
import "./TaskCard.css";
const TaskDetail = ({ task, setCurrentId }) => {
  const [deleteTask, { error }] = useMutation(DELETE_TASK);
  const [open, setOpen] = useState(false);
  const color = priorityOptions.find((p) => {
    return p.value === task.prioritylevel;
  });
  const handleChange = () => {
    setCurrentId(task.id);
    
  };
  //add Delete_Task function
<<<<<<< HEAD
  
=======
  const handleDelete = async () => {
    const { data } = await deleteTask({
      variables: {
        deleteTaskId: task.id,
      },
    });
    window.location.assign("/today");
  };
>>>>>>> 20468d7ae25264c38dc4bfee3b8843f938a72671

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
        <Modal
          basic
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          open={open}
          size="small"
          trigger={
            <Icon color="white" className="icon" name="trash alternate" />
          }
        >
          <Header icon>
            <Icon name="archive" />
            Delete Task
          </Header>
          <Modal.Content>
            <p className="message">
              Are you sure you want to delete the task ?
            </p>
          </Modal.Content>
          <Modal.Actions>
            <Button basic color="red" inverted onClick={() => setOpen(false)}>
              <Icon name="remove" /> No
            </Button>
            <Button
              color="green"
              inverted
              onClick={() => {
                setOpen(false);
                handleDelete();
              }}
            >
              <Icon name="checkmark" /> Yes
            </Button>
          </Modal.Actions>
        </Modal>
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
