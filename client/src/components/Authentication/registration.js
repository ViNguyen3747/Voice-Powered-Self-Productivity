import React from "react";
import { GoogleLogin } from "react-google-login";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Button, Form, Input } from "semantic-ui-react";
const dispatch = useDispatch;

const AUTH = "AUTH";

const Register = () => {
  const history = useHistory();
  const googleSuccess = (res) => {
    const result = res.profileObj;
    const token = res.tokenId;
    try {
      dispatch({ type: AUTH, data: { result, token } });
      history.pushState("/");
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
          <Form>
            <Form.Group widths="equal">
              <Form.Input
                name="firstName"
                label="First Name"
                fluid
                id="form-subcomponent-shorthand-input-first-name"
                placeholder="First name"
              />
              <Form.Input
                type="text"
                name="lastName"
                label="Last Name"
                fluid
                id="form-subcomponent-shorthand-input-last-name"
                placeholder="Last name"
              />
            </Form.Group>
            <Form.Input
              className="email"
              label="Email"
              id="form-input-control-error-email"
              control={Input}
              name="email"
              placeholder="joe@schmoe.com"
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
              />
              <Form.Input
                type="password"
                name="retypePassword"
                label="Retype Password"
                fluid
                placeholder="retype password"
              />
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
                    color="primary"
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
