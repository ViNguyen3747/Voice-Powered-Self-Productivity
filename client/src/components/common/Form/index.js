import React from "react";
import { Form, Button, Grid } from "semantic-ui-react";
import SemanticDatepicker from "react-semantic-ui-datepickers";
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
      <Grid>
        <Grid.Row>this is form </Grid.Row>
        <Grid.Row>
          <Form.Input
            label="Task Name"
            placeholder="Task Name"
            style={{ width: "50vw" }}
          />
          <Form.Select
            label="Category"
            options={options}
            placeholder="Category"
            style={{ width: "30vw" }}
          />
        </Grid.Row>
        <div className="button-container">
          <Button.Group vertical>
            {priorityOptions.map((p) => (
              <Button color={p.color} style={{ width: "50vw" }}>
                {p.text}
              </Button>
            ))}
            {/* <Button color="red">Feed</Button>
            <Button color="orange">Messages</Button>
            <Button color="olive">Events</Button>
            <Button color="teal">Photos</Button> */}
          </Button.Group>
        </div>
        <div className="datepicker">
          <SemanticDatepicker label="Date" size="big" />
        </div>

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
