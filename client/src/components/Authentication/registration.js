import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { GoogleLogin } from "react-google-login";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Button, Form } from "semantic-ui-react";
import { useMutation } from "@apollo/client";
import { signup } from "../../utils/graphQL/mutation";

import Auth from "../../utils/auth";
import { registerSchema } from "../../utils/validation/authenticationValidation";
const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(registerSchema) });
  const [addUser, { error }] = useMutation(signup);

  // Handle form submit
  const onSubmit = (userData) => {
    try {
      //Getting data from the form

      const { data } = addUser({
        variables: { newUser: { ...userData } },
      });
      //Authorizing the user
      Auth.login(data.signup.token);
    } catch (error) {
      console.log(error);
      console.log("signup error");
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
        <div className="header">Sign Up</div>
        <div>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group widths="equal">
              <Form.Field required>
                <label>First Name</label>
                <input
                  type="text"
                  placeholder="First name"
                  {...register("firstName")}
                />
                <p className="errorText">{errors.firstName?.message}</p>
              </Form.Field>
              <Form.Field required>
                <label>Last Name</label>
                <input
                  type="text"
                  placeholder="Last Name"
                  {...register("lastName")}
                />
                <p className="errorText">{errors.lastName?.message}</p>
              </Form.Field>
            </Form.Group>
            <Form.Field required>
              <label>Email</label>
              <input type="email" placeholder="email" {...register("email")} />
              <p className="errorText">{errors.email?.message}</p>
            </Form.Field>
            <Form.Field required>
              <label>Username</label>
              <input
                type="text"
                placeholder="Username"
                {...register("username")}
              />
              <p className="errorText">{errors.username?.message}</p>
            </Form.Field>

            <Form.Group widths="equal">
              <Form.Field required>
                <label>Password</label>
                <input
                  type="password"
                  placeholder="password"
                  {...register("password")}
                />
                <p className="errorText">{errors.password?.message}</p>
              </Form.Field>
              <Form.Field required>
                <label>Retype Password</label>
                <input
                  type="password"
                  placeholder="Retype Password"
                  {...register("retypePassword")}
                />
                <p className="errorText">{errors.retypePassword?.message}</p>
              </Form.Field>
            </Form.Group>
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
                    Sign up with Google
                  </Button>
                )}
                onSuccess={googleSuccess}
                onFailure={googleError}
                cookiePolicy="single_host_origin"
              />
            </div>
            <div className="authlink">
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
