import React from "react";
import { Form, Button, Grid, Label } from "semantic-ui-react";
import SemanticDatepicker from "react-semantic-ui-datepickers";
import {
  PushToTalkButton,
  PushToTalkButtonContainer,
} from "@speechly/react-ui";
import "./form.css";
import "../../common/Styles/commonStyles.css";
const options = [
  { text: "Professional", value: "Professional" },
  { text: "Physical", value: "Physical" },
  { text: "Pratical", value: "Pratical" },
  { text: "Social", value: "Social" },
  { text: "Spiritual", value: "Spiritual" },
  { text: "Mental/Intellectual", value: "Intellectual" },
];

const priorityOptions = [
  {
    color: "red",
    value: "A",
    text: "Urgent AND Important",
  },
  {
    color: "orange",
    value: "B",
    text: "Important NOT Urgent",
  },
  {
    color: "olive",
    value: "C",
    text: "Urgent NOT Important",
  },
  {
    color: "teal",
    value: "D",
    text: "NOT Urgent OR Important",
  },
];

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
      <div>this is form </div>
      <Grid>
        <Grid.Column mobile={16} tablet={8} computer={8}>
          <LabelTag text="Task Name" />
          <Form.Input placeholder="Task Name" />
        </Grid.Column>
        <Grid.Column mobile={16} tablet={8} computer={8}>
          <LabelTag text="Category" />
          <Form.Select options={options} placeholder="Category" />
        </Grid.Column>

        <Grid.Column mobile={16} tablet={8} computer={8}>
          <LabelTag text="Priority Level" />
          <Button.Group fluid vertical>
            {priorityOptions.map((p) => (
              <div className="button-container">
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
          <div>
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
