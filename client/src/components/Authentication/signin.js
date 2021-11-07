import React from "react";
import { GoogleLogin } from "react-google-login";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Button, Form, Input } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { useHistory } from "react-router-dom";
const dispatch = useDispatch;
const AUTH = "AUTH";

const Sinin = () => {
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
    <div className="formContainer">
      <div className="header">
        <h6 className="back">BACK</h6>
        <h6 className="up"> SIG IN </h6>
      </div>
      <div className="formWrapper">
        <Form>
          <Form.Field
            name="email"
            id="form-input-control-error-email"
            control={Input}
            placeholder="joe@schmoe.com"
            /*error={{
              content: 'Please enter a valid email address',
              pointing: 'below',
            }}*/
          />

          <Form.Field name="password">
            <input placeholder="Enter password" />
          </Form.Field>
          <Button secondary type="submit">
            Submit
          </Button>
          <div>
            <GoogleLogin
              clientId="375983667598-fblbteage49sr5qmhit2deqvemsqurr5.apps.googleusercontent.com"
              render={(renderProps) => (
                <Button
                  color="primary"
                  //fullWidth
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                  variant="contained"
                  width="10px"
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
              Don't have an account? <Link to="/">Sig Up</Link>
            </p>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Sinin;
