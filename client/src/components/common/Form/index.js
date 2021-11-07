import React from "react";
import { Form, Button, Grid, Label } from "semantic-ui-react";
import SemanticDatepicker from "react-semantic-ui-datepickers";
import {
  PushToTalkButton,
  PushToTalkButtonContainer,
} from "@speechly/react-ui";
import "./form.css";
import "../../common/Styles/commonStyles.css";
import { categoriesOptions, priorityOptions } from "../Data";

const LabelTag = ({ text }) => (
  <div className="label">
    <Label tag color="black" size="large">
      {text}
    </Label>
  </div>
);
const index = () => {
  return (
    <Form className="form-container">
      <Grid>
        <Grid.Column mobile={16} tablet={8} computer={8}>
          <LabelTag text="Task Name" />
          <Form.Input placeholder="Task Name" />
        </Grid.Column>
        <Grid.Column mobile={16} tablet={8} computer={8}>
          <LabelTag text="Category" />
          <Form.Select options={categoriesOptions} placeholder="Category" />
        </Grid.Column>

        <Grid.Column mobile={16} tablet={8} computer={8}>
          <LabelTag text="Priority Level" />
          <Button.Group fluid vertical>
            {priorityOptions.map((p) => (
              <div className="select-container" key={p.text}>
                <Button color={p.color}>{p.text}</Button>
              </div>
            ))}
          </Button.Group>
        </Grid.Column>
        <Grid.Column mobile={16} tablet={4} computer={4}>
          <div>
            <LabelTag text="Date" />
            <SemanticDatepicker size="large" />
          </div>
          <div className="button-container">
            <LabelTag text="Duration" />
            <Form.Input type="number" />
          </div>
        </Grid.Column>
        <Grid.Column mobile={16} tablet={16} computer={16}>
          <Button color="black" size="big" fluid>
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

export default index;
