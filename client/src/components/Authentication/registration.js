import React, { useState } from "react";
import { GoogleLogin } from "react-google-login";
import { Link } from "react-router-dom";
import { Button, Form, Input } from "semantic-ui-react";
import { useMutation } from "@apollo/client";
import { signup } from "../../utils/graphQL/mutation";
import Auth from "../../utils/auth";

const Register = () => {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    // retypePassword: "",
  });
  const [addUser, { error }] = useMutation(signup);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // Handle form submit
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      //Getting data from the form
      console.log(formState);

      const { data } = await addUser({
        variables: { newUser: { ...formState } },
      });
      console.log(data);
      //Authorizing the user
      Auth.login(data.signup.token);
    } catch (error) {
      console.log(error);
      console.log("signup error");
    }

    // clear form values
    setFormState({
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
      // retypePassword: "",
    });
  };

  const googleSuccess = (res) => {
    const result = res.profileObj;
    const token = res.tokenId;
    try {
      Auth.login(token);
    } catch (error) {
      console.log(error);
    }
  };

  const googleError = () => {
    console.log("Google Sign in was unsuccessful. Try again later");
  };

  return (
    <div className="container">
      <div className="formContainer">
        <div className="header">Sign Up</div>
        <div className="formWrapper">
          <Form onSubmit={handleFormSubmit}>
            <Form.Group widths="equal">
              <Form.Input
                name="firstName"
                label="First Name"
                fluid
                id="form-subcomponent-shorthand-input-first-name"
                placeholder="First name"
                onChange={handleChange}
                value={formState.firstName}
              />
              <Form.Input
                type="text"
                name="lastName"
                label="Last Name"
                fluid
                id="form-subcomponent-shorthand-input-last-name"
                placeholder="Last name"
                onChange={handleChange}
                value={formState.lastName}
              />
            </Form.Group>
            <Form.Input
              className="email"
              label="Email"
              id="form-input-control-error-email"
              control={Input}
              name="email"
              placeholder="joe@schmoe.com"
              onChange={handleChange}
              value={formState.email}
              /*error={{
                    content: '',
                    pointing: 'below',
                  }}*/
            />
            <Form.Input
              className="email"
              label="Username"
              control={Input}
              name="username"
              placeholder="username"
              onChange={handleChange}
              value={formState.username}
              /*error={{
                    content: '',
                    pointing: 'below',
                  }}*/
            />
            <Form.Group widths="equal">
              <Form.Input
                type="password"
                name="password"
                label="Password"
                fluid
                placeholder="password"
                onChange={handleChange}
                value={formState.password}
              />
              {/* <Form.Input
                type="password"
                name="retypePassword"
                label="Retype Password"
                fluid
                placeholder="retype password"
                onChange={handleChange}
                value={formState.retypePassword}
              /> */}
            </Form.Group>
            <div className="authButton">
              <Button secondary type="submit">
                Submit
              </Button>
            </div>
            <div>
              <GoogleLogin
                clientId="375983667598-fblbteage49sr5qmhit2deqvemsqurr5.apps.googleusercontent.com"
                render={(renderProps) => (
                  <Button
                    color="blue"
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                    variant="contained"
                    width="10px"
                  >
                    Sign up with Google
                  </Button>
                )}
                onSuccess={googleSuccess}
                onFailure={googleError}
                cookiePolicy="single_host_origin"
              />
            </div>
            <div className="signin">
              <p>
                Already have an acount? <Link to="/login">Sign in</Link>
              </p>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Register;
