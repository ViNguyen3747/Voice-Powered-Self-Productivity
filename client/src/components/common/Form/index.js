import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { Form, Button, Grid, Label, Dropdown } from "semantic-ui-react";
import SemanticDatepicker from "react-semantic-ui-datepickers";
import {
  PushToTalkButton,
  PushToTalkButtonContainer,
} from "@speechly/react-ui";
import "./form.css";
import "../../common/Styles/commonStyles.css";
import { categoriesOptions, priorityOptions } from "../Data";
import { ADD_TASK } from "../../../utils/mutation";
const LabelTag = ({ text }) => (
  <div className="label">
    <Label tag color="black" size="large">
      {text}
    </Label>
  </div>
);

const TaskForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    category: "",
    priorityLevel: "",
    duration: 0,
    isDone: false,
    date: new Date(),
  });
  const [addTask, { error }] = useMutation(ADD_TASK);

  const handleChange = (event, { name, value }) => {
    console.log(value);
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      //Getting data from the form
      console.log(formState);

      const { data } = await addTask({
        variables: {
          input: {
            ...formState,
            duration: parseFloat(formState.duration),
            isDone: false,
          },
        },
      });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
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
          {/* <Button.Group fluid vertical>
            {priorityOptions.map((p) => (
              <div className="select-container" key={p.text}>
                <Button
                  color={p.colorText}
                  onClick={() => getPriority(p.value)}
                >
                  {p.text}
                </Button>
              </div>
            ))}
          </Button.Group> */}
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
        <PushToTalkButtonContainer>
          <PushToTalkButton />
        </PushToTalkButtonContainer>
      </Grid>
    </Form>
  );
};

export default TaskForm;
