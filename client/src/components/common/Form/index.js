import React, { useState, useEffect } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { Form, Button, Grid, Label } from "semantic-ui-react";
import SemanticDatepicker from "react-semantic-ui-datepickers";
import {
  PushToTalkButton,
  PushToTalkButtonContainer,
} from "@speechly/react-ui";
import "./form.css";
import "../../common/Styles/commonStyles.css";
import { categoriesOptions, priorityOptions } from "../Data";
import { ADD_TASK } from "../../../utils/mutation";
import { GET_TASK } from "../../../utils/query";
import { UPDATE_TASK } from "../../../utils/mutation";

const LabelTag = ({ text }) => (
  <div className="label">
    <Label tag color="black" size="large">
      {text}
    </Label>
  </div>
);

const initialState = {
  name: "",
  category: "",
  priorityLevel: "",
  duration: 0,
  isDone: false,
  date: new Date(),
};

const TaskForm = ({ currentId, setCurrentId }) => {
  const [formState, setFormState] = useState(initialState);
  const {
    data,
    loading,
    error: taskerror,
  } = useQuery(GET_TASK, { variables: { taskId: currentId } });

  const [addTask, { error }] = useMutation(ADD_TASK);

  const handleChange = (event, { name, value }) => {
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const [updateTask, { error}] = useMutation(UPDATE_TASK);

  useEffect(() => {
    if (data) setFormState(data.task);
  }, [data]);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      if (currentId) {
        //add Update_Task function
        const { data } = await updateTask({
          variables: {
            updateTaskId: setCurrentId,
            input: {
              ...formState,
              duration: parseFloat(formState.duration),
              isDone: false,
            },
          },
        });
        clear();
      } else {
        const { data } = await addTask({
          variables: {
            input: {
              ...formState,
              duration: parseFloat(formState.duration),
              isDone: false,
            },
          },
        });
      }
      window.location.assign("/today");
    } catch (error) {
      console.log(error);
    }
  };
  const clear = () => {
    setFormState(initialState);
    setCurrentId(null);
  };
  return (
    <Form className="form-container" onSubmit={handleFormSubmit}>
      <Grid>
        <Grid.Column mobile={16} tablet={8} computer={8}>
          <LabelTag text="Task Name" />
          <Form.Input
            name="name"
            onChange={handleChange}
            value={formState.name}
            placeholder="Task Name"
          />
        </Grid.Column>
        <Grid.Column mobile={16} tablet={8} computer={8}>
          <LabelTag text="Category" />
          <Form.Select
            options={categoriesOptions}
            name="category"
            onChange={handleChange}
            value={formState.category}
            placeholder="Category"
          />
        </Grid.Column>

        <Grid.Column mobile={16} tablet={8} computer={8}>
          <LabelTag text="Priority Level" />
          <Form.Select
            options={priorityOptions}
            name="priorityLevel"
            onChange={handleChange}
            value={formState.priorityLevel}
            placeholder="priority level"
          />
        </Grid.Column>
        <Grid.Column mobile={16} tablet={4} computer={4}>
          <div>
            <LabelTag text="Date" />
            <SemanticDatepicker
              size="large"
              name="date"
              onChange={handleChange}
              value={formState.date}
            />
          </div>
          <div className="button-container">
            <LabelTag text="Duration" />
            <Form.Input
              type="number"
              name="duration"
              onChange={handleChange}
              value={formState.duration}
            />
          </div>
        </Grid.Column>
        <Grid.Column mobile={16} tablet={16} computer={16}>
          <Button color="black" size="big" fluid type="submit">
            Submit
          </Button>
        </Grid.Column>
        {currentId && (
          <Grid.Column mobile={16} tablet={16} computer={16}>
            <Button color="black" size="big" fluid onClick={clear}>
              Clear
            </Button>
          </Grid.Column>
        )}
        <PushToTalkButtonContainer>
          <PushToTalkButton />
        </PushToTalkButtonContainer>
      </Grid>
    </Form>
  );
};

export default TaskForm;
