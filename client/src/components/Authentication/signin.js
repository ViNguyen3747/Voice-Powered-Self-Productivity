import React, { useState } from "react";
import { GoogleLogin } from "react-google-login";
import { Link } from "react-router-dom";
import { Button, Form, Input } from "semantic-ui-react";
import { useMutation } from "@apollo/client";
import { LOG_IN } from "../../utils/graphQL/mutation";
import Auth from "../../utils/auth";

const Signin = (_props) => {
  const [showPassword, setShowPassword] = useState(false);
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error }] = useMutation(LOG_IN);

  const handleShowPassword = () =>
    setShowPassword((prevShowPassword) => !prevShowPassword);

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
      const { data } = await login({
        variables: { email: formState.email, password: formState.password },
      });
      console.log(data);
      Auth.login(data.signin.token, data);
    } catch (error) {
      console.log(error);
    }

    // clear form values
    setFormState({
      email: "",
      password: "",
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
        <div className="header">Sign In</div>
        <div className="formWrapper">
          <Form onSubmit={handleFormSubmit}>
            <Form.Field
              name="email"
              id="form-input-control-error-email"
              control={Input}
              placeholder="joe@schmoe.com"
              label="Email"
              onChange={handleChange}
              value={formState.email}
              /*error={{
              content: 'Please enter a valid email address',
              pointing: 'below',
            }}*/
            />

            <Form.Field
              name="password"
              placeholder="Enter password"
              label="Password"
              control={Input}
              onChange={handleChange}
              type={showPassword ? "text" : "password"}
              handleShowPassword={handleShowPassword}
              value={formState.password}
            />

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
                    className="authButton"
                  >
                    Sign in with Google
                  </Button>
                )}
                onSuccess={googleSuccess}
                onFailure={googleError}
                cookiePolicy="single_host_origin"
              />
            </div>
            <div className="signin">
              <p>
                Don't have an account? <Link to="/">Sign Up</Link>
              </p>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Signin;
