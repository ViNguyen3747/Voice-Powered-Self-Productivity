import React, { useState, useEffect } from "react";
import { useSpeechContext } from "@speechly/react-client";
import { useMutation, useQuery } from "@apollo/client";
import { Form, Button, Grid, Label } from "semantic-ui-react";
import SemanticDatepicker from "react-semantic-ui-datepickers";
import "./form.css";
import "../../common/Styles/commonStyles.css";
import { categoriesOptions, priorityOptions } from "../Data";
import { ADD_TASK, UPDATE_TASK } from "../../../utils/graphQL/mutation";
import { GET_TASK } from "../../../utils/graphQL/query";
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
  prioritylevel: "",
  duration: 0,
  isDone: false,
  date: new Date(),
};

const initialTime = { start: "00:00", finish: "00:00" };

const TaskForm = ({ currentId, setCurrentId, rerouting }) => {
  const { segment } = useSpeechContext();
  const [formState, setFormState] = useState(initialState);
  const [timerange, setTime] = useState(initialTime);
  const {
    data,
    loading,
    error: taskerror,
  } = useQuery(GET_TASK, { variables: { taskId: currentId } });

  const [addTask, { error }] = useMutation(ADD_TASK);
  const [updateTask, { error: updateError }] = useMutation(UPDATE_TASK);

  const handleChange = (event, { name, value, type }) => {
    setFormState({
      ...formState,
      [name]: value,
    });
    console.log(formState);
  };

  useEffect(() => {
    if (data) {
      console.log(data);
      let { name, category, prioritylevel, duration, date, start, finish } =
        data.task;
      setFormState({
        name,
        category,
        prioritylevel,
        duration,
        date: new Date(date),
      });
      setTime({ start, finish });
    }

    if (segment) {
      if (segment.isFinal) {
        if (segment.intent.intent === "create") {
          setCurrentId(null);
          setFormState(initialState);
          segment.entities.forEach((e) => {
            if (e.type !== "start" || e.type !== "finish") {
              setFormState({ ...formState, [e.type]: e.value });
            } else {
              setTime({ ...timerange, [e.type]: e.value });
            }
          });
        } else if (segment.intent.intent.includes("update")) {
          let intent = segment.intent.intent.replace("update_", "");
          if (currentId) {
            if (intent !== "duration") {
              setFormState({
                ...formState,
                [segment.entities[0].type]: segment.entities[0].value,
              });
            } else {
              segment.entities.forEach((e) => {
                setTime({ ...timerange, [e.type]: e.value });
              });
            }
          }
        }
        handleFormSubmit();
      }
    }
  }, [data, segment]);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      if (currentId) {
        const { data } = await updateTask({
          variables: {
            updateTaskId: currentId,
            input: {
              ...formState,
              start: timerange.start,
              finish: timerange.finish,
              duration: parseFloat(
                timeConvert(timerange.finish) - timeConvert(timerange.start)
              ),
            },
          },
        });
        clear();
      } else {
        const { data } = await addTask({
          variables: {
            input: {
              ...formState,
              start: timerange.start,
              finish: timerange.finish,
              duration: parseFloat(
                timeConvert(timerange.finish) - timeConvert(timerange.start)
              ),
              isDone: false,
            },
          },
        });
      }
      window.location.assign(`/${rerouting}`);
    } catch (error) {
      console.log(error);
    }
  };
  const clear = () => {
    setFormState(initialState);
    setCurrentId(null);
    setTime(initialTime);
  };
  const timeChange = (event, { name, value }) => {
    setTime({
      ...timerange,
      [name]: value,
    });
  };

  const timeConvert = (time) => {
    let t = time.split(":");
    return +t[0] * 60 * 60 + +t[1] * 60;
  };
  return (
    <Form className="form-container">
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
          <div>
            <LabelTag text="Priority Level" />
            <Form.Select
              options={priorityOptions}
              name="prioritylevel"
              onChange={handleChange}
              value={formState.prioritylevel}
              placeholder="priority level"
            />
          </div>
          <div className="button-container">
            <LabelTag text="Date" />
            <SemanticDatepicker
              size="large"
              name="date"
              onChange={handleChange}
              value={formState.date}
            />
          </div>
        </Grid.Column>

        <Grid.Column mobile={8} tablet={8} computer={8}>
          <>
            <LabelTag text="Start" />
            <Form.Input
              size="small"
              type="time"
              name="start"
              value={timerange.start}
              onChange={timeChange}
            />
          </>
          <>
            <LabelTag text="Finish" />
            <Form.Input
              size="small"
              type="time"
              name="finish"
              value={timerange.finish}
              onChange={timeChange}
            />
          </>
        </Grid.Column>

        <Grid.Column mobile={16} tablet={16} computer={16}>
          <Button color="black" size="big" fluid onClick={handleFormSubmit}>
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
      </Grid>
    </Form>
  );
};

export default TaskForm;
