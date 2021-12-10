import React, { useEffect } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { animateScroll as scroll } from "react-scroll";
import { Controller, useForm } from "react-hook-form";
import { useSpeechContext } from "@speechly/react-client";
import { useMutation, useQuery } from "@apollo/client";
import { Form, Button, Grid, Label, Typo } from "semantic-ui-react";
import SemanticDatepicker from "react-semantic-ui-datepickers";
import "./form.css";
import "../../common/Styles/commonStyles.css";
import { categoriesOptions, priorityOptions } from "../Data";
import { ADD_TASK, UPDATE_TASK } from "../../../utils/graphQL/mutation";
import { GET_TASK } from "../../../utils/graphQL/query";
import { taskSchema } from "../../../utils/validation/taskFormValidation";
import { resultKeyNameFromField } from "@apollo/client/utilities";
const LabelTag = ({ text }) => (
  <div className="label">
    <Label tag color="black" size="large">
      {text}
    </Label>
  </div>
);

const initialState = {
  name: "",
  category: "Professional",
  prioritylevel: "A",
  duration: -1,
  isDone: false,
  start: "00:00",
  finish: "00:00",
  date: new Date(),
};

const TaskForm = ({ currentId, setCurrentId, rerouting }) => {
  const {
    handleSubmit,
    clearErrors,
    register,
    setValue,
    getValues,
    control,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(taskSchema),
    defaultValues: initialState,
  });
  const { segment } = useSpeechContext();
  const {
    data,
    loading,
    error: taskerror,
  } = useQuery(GET_TASK, { variables: { taskId: currentId } });

  const [addTask, { error }] = useMutation(ADD_TASK);
  const [updateTask, { error: updateError }] = useMutation(UPDATE_TASK);

  useEffect(() => {
    reset();
    if (data) {
      clearErrors();
      scroll.scrollToTop();
      let { createdAt, id, isDone, owner, __typename, ...task } = data.task;

      Object.entries(task).map(([key, value]) =>
        setValue(key, key === "date" ? new Date(value) : value)
      );
    }
    if (segment) {
      console.log(segment.intent.intent);
      if (
        segment.intent.intent === "create" ||
        segment.intent.intent === "reset"
      ) {
        clear();
      }
      segment.entities.forEach((e) => {
        let value = e.value;
        if (e.type === "date") value = new Date(e.value);
        if (e.type === "name") value = e.value.toLowerCase();
        if (e.type === "category")
          value = e.value.charAt(0) + e.value.substring(1).toLowerCase();
        setValue(e.type, value);
      });
      if (
        segment.isFinal &&
        getValues("name") &&
        getValues("category") &&
        getValues("prioritylevel") &&
        getValues("date") &&
        getValues("start") &&
        getValues("finish")
      ) {
        handleFormSubmit();
      }
    }
  }, [data, segment]);

  const handleFormSubmit = async () => {
    setValue(
      "duration",
      parseFloat(
        timeConvert(getValues("finish")) - timeConvert(getValues("start"))
      )
    );
    let taskData = getValues();
    try {
      if (currentId) {
        const { data } = await updateTask({
          variables: {
            updateTaskId: currentId,
            input: {
              ...taskData,
            },
          },
        });
        clear();
      } else {
        const { data } = await addTask({
          variables: {
            input: {
              ...taskData,
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
    setCurrentId(null);
    clearErrors();
  };

  const timeConvert = (time) => {
    let t = time.split(":");
    return +t[0] * 60 * 60 + +t[1] * 60;
  };
  return (
    <Form className="form-container" onSubmit={handleSubmit(handleFormSubmit)}>
      <Grid>
        <Grid.Column mobile={16} tablet={16} computer={16}>
          {segment && segment.words.map((w) => w.value).join(" ")}
        </Grid.Column>
        <Grid.Column mobile={16} tablet={8} computer={8}>
          <Form.Field required>
            <LabelTag text="Task Name" />
            <input type="text" placeholder="task name" {...register("name")} />
            <p className="error">{errors.name?.message}</p>
          </Form.Field>
        </Grid.Column>
        <Grid.Column mobile={16} tablet={8} computer={8}>
          <Form.Field>
            <LabelTag text="Category" />
            <Controller
              control={control}
              name="category"
              render={({ field: { onChange } }) => (
                <>
                  <Form.Select
                    options={categoriesOptions}
                    onChange={(event, data) => onChange(data.value)}
                    value={getValues("category")}
                    placeholder="category"
                  />
                  <p className="error">{errors.category?.message}</p>
                </>
              )}
            />
          </Form.Field>
        </Grid.Column>

        <Grid.Column mobile={16} tablet={8} computer={8}>
          <Form.Field>
            <LabelTag text="Priority Level" />
            <Controller
              control={control}
              name="prioritylevel"
              render={({ field: { onChange, value } }) => (
                <>
                  <Form.Select
                    options={priorityOptions}
                    value={getValues("prioritylevel")}
                    onChange={(event, data) => onChange(data.value)}
                    placeholder="priority level"
                  />
                  <p className="error">{errors.prioritylevel?.message}</p>
                </>
              )}
            />
          </Form.Field>
          <div className="button-container">
            <Form.Field>
              <LabelTag text="Date" />
              <Controller
                control={control}
                name="date"
                render={({ field }) => (
                  <>
                    <SemanticDatepicker
                      value={getValues("date")}
                      onChange={(event, data) => field.onChange(data.value)}
                    />
                    <p className="error">{errors.date?.message}</p>
                  </>
                )}
              />
            </Form.Field>
          </div>
        </Grid.Column>

        <Grid.Column mobile={8} tablet={8} computer={8}>
          <LabelTag text="Start" />
          <Form.Field size="small">
            <input type="time" name="start" {...register("start")} />
          </Form.Field>
          <LabelTag text="Finish" />
          <Form.Field size="small">
            <input type="time" name="finish" {...register("finish")} />
            <p className="error">{errors.finish?.message}</p>
          </Form.Field>
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
      </Grid>
    </Form>
  );
};

export default TaskForm;
