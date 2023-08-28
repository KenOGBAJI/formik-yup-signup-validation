import React from "react";
import {
  Avatar,
  Button,
  Grid,
  Link,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { Form, Formik, Field, ErrorMessage } from "formik";
import { LockOutlined } from "@mui/icons-material";
import * as Yup from "yup";

const Login = ({ handleChange }) => {
  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 400,
    margin: "0 auto",
  };
  const headerStyle = { margin: 0, width: 300 };
  const avatarStyle = { backgroundColor: "blue" };
  const marginTop = { marginTop: 5 };
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Please enter valid email").required("Required"),
    password: Yup.string().required("Reqired"),
  });
  const onSubmit = (values, props) => {
    console.log(values);
    setTimeout(() => {
      props.resetForm();
      props.setSubmitting(false);
    }, 2000);
    console.log(props);
  };

  return (
    <Grid>
      <Paper style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <LockOutlined />
          </Avatar>
          <h2 style={headerStyle}>Sign In</h2>
          <Typography variant="caption" gutterBottom>
            Sign into your existing account
          </Typography>
        </Grid>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          {(props) => (
            <Form>
              {console.log(props)}
             
              <Field
                as={TextField}
                fullWidth
                name="email"
                label="Email"
                type="email"
                variant="standard"
                placeholder="Enter your Email"
                required
                helperText={<ErrorMessage name="email" />}
                gutterBottom
              />
              <Field
                as={TextField}
                fullWidth
                name="password"
                label="Password"
                type="password"
                variant="standard"
                placeholder="Enter your Password"
                helperText={<ErrorMessage name="password" />}
                required
                gutterBottom
              />

              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={props.isSubmitting}
                style={marginTop}
                fullWidth
                >
                {props.isSubmitting ? "Loading" : "Sign In"}
                {/* Sign In */}
              </Button>
              {/* {console.log(props)} */}
            </Form>
          )}
        </Formik>
        <Typography>
          Don't have an account?
          <Link href="#" onClick={() => handleChange("event", 1)}>
            Sign Up
          </Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default Login;
