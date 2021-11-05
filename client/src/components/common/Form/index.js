import React from "react";
import { Form, Button, Grid } from "semantic-ui-react";
import SemanticDatepicker from "react-semantic-ui-datepickers";
import {
  PushToTalkButton,
  PushToTalkButtonContainer,
  ErrorPanel,
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

const index = () => {
  return (
    <Form className="form-container">
      <div>this is form </div>
      <Grid>
        <Grid.Column mobile={16} tablet={8} computer={8}>
          <Form.Input label="Task Name" placeholder="Task Name" />
        </Grid.Column>
        <Grid.Column mobile={16} tablet={8} computer={8}>
          <Form.Select
            label="Category"
            options={options}
            placeholder="Category"
          />
        </Grid.Column>

        <Grid.Column mobile={16} tablet={8} computer={8}>
          <Button.Group fluid vertical>
            {priorityOptions.map((p) => (
              <Button className="button-container" color={p.color}>
                {p.text}
              </Button>
            ))}
            {/* <Button color="red">Feed</Button>
            <Button color="orange">Messages</Button>
            <Button color="olive">Events</Button>
            <Button color="teal">Photos</Button> */}
          </Button.Group>
        </Grid.Column>
        <Grid.Column mobile={16} tablet={4} computer={4}>
          <SemanticDatepicker label="Date" size="large" />
          <Form.Input label="Duration" type="number" />
          <Button color="twitter" size="big">
            Submit
          </Button>
        </Grid.Column>
        {/* <Grid.Column mobile={4} tablet={4} computer={4}></Grid.Column> */}
        <PushToTalkButtonContainer>
          <PushToTalkButton />
        </PushToTalkButtonContainer>
        {/* <Form.Group>
          <Form.Input placeholder="8 Wide" width={8} />
          <Form.Input placeholder="6 Wide" width={6} />
          <Form.Input placeholder="2 Wide" width={2} />
        </Form.Group> */}
      </Grid>
    </Form>
  );
};

export default index;
