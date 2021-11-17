//Importing files and packages
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import { Link } from "react-router-dom";
// import { useDispatch } from "react-redux";
import { Button, Form, Input } from "semantic-ui-react";
import { useMutation } from "@apollo/client";
import { signin } from "../../utils/mutation";
import Auth from "../../utils/auth";

// const dispatch = useDispatch;
// const AUTH = "AUTH";

//Function Signin that is exported
const Signin = (_props) => {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error }] = useMutation(signin);

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
        variables: { ...formState },
      });

      Auth.login(data.login.token);
      // history.pushState("/");
    } catch (error) {
      console.log(error);
    }

    // clear form values
    setFormState({
      email: "",
      password: "",
    });
  };

  // //use history
  // const history = useHistory();
  const googleSuccess = (res) => {
    const result = res.profileObj;
    const token = res.tokenId;
    try {
      Auth.login(token);
      // history.pushState("/");
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
