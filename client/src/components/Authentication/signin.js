import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { GoogleLogin } from "react-google-login";
import { Link } from "react-router-dom";
import { Button, Form } from "semantic-ui-react";
import { useMutation } from "@apollo/client";
import { signin } from "../../utils/graphQL/mutation";
import Auth from "../../utils/auth";
import { signinSchema } from "../../utils/validation/authenticationValidation";

const Signin = (_props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(signinSchema) });
  const [login, { error }] = useMutation(signin);

  // Handle form submit
  const handleFormSubmit = async (userData) => {
    try {
      const { data } = await login({
        variables: { ...userData },
      });
      Auth.login(data.signin.token, data);
    } catch (error) {
      console.log(error);
    }
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
        <div>
          <Form onSubmit={handleSubmit(handleFormSubmit)}>
            <Form.Field required>
              <label>Email</label>
              <input type="email" placeholder="email" {...register("email")} />
              <p className="errorText">{errors.email?.message}</p>
            </Form.Field>
            <Form.Field required>
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter password"
                {...register("password")}
              />
              <p className="errorText">{errors.password?.message}</p>
            </Form.Field>

            <div>
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
                    Sign in with Google
                  </Button>
                )}
                onSuccess={googleSuccess}
                onFailure={googleError}
                cookiePolicy="single_host_origin"
              />
            </div>
            <div className="authlink">
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
