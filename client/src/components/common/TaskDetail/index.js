import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { DELETE_TASK, UPDATE_TASK } from "../../../utils/graphQL/mutation";
import { Checkbox, Icon, Button, Header, Modal } from "semantic-ui-react";
import { priorityOptions } from "../Data";
import "./TaskDetail.css";
const TaskDetail = ({ task, setCurrentId, today }) => {
  const [deleteTask, { error }] = useMutation(DELETE_TASK);
  const [updateTask, { error: updateError }] = useMutation(UPDATE_TASK);
  const [open, setOpen] = useState(false);
  const color = priorityOptions.find((p) => {
    return p.value === task.prioritylevel;
  });
  //get ID for update_Task
  const handleChange = () => {
    setCurrentId(task.id);
  };
  //add Delete_Task function
  const handleDelete = async () => {
    const { data } = await deleteTask({
      variables: {
        deleteTaskId: task.id,
      },
    });
    window.location.assign("/today");
  };

  const handleCheck = async () => {
    const { data } = await updateTask({
      variables: {
        updateTaskId: task.id,
        input: {
          name: task.name,
          category: task.category,
          prioritylevel: task.prioritylevel,
          duration: task.duration,
          date: task.date,
          isDone: !task.isDone,
        },
      },
    });
  };
  return (
    <div className="task-detail" style={{ backgroundColor: `#${color.color}` }}>
      {today && (
        <>
          <Checkbox checked={task.isDone} onChange={handleCheck} />
          <div className="task-name">{task.name}</div>
        </>
      )}

      <div className={!today ? "edit" : ""}>
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

export default TaskDetail;
