import React from "react";
import classes from "../styles/Login.module.css";
import Form from "./Form";
import TextInput from "./TextInput";
import Button from "./Button";

function LoginForm() {
  return (
    <>
      <Form className={`${classes.signup}`}>
        <TextInput
          type="text"
          placeholder="Enter email"
          icon="alternate_email"
        />

        <TextInput type="password" placeholder="Enter password" icon="lock" />

        <Button>Log in</Button>
        <div className="info">
          Don't have an account? <a href="login.html">Signup </a> instead.
        </div>
      </Form>
    </>
  );
}

export default LoginForm;
