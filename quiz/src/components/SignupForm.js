import React from "react";
import classes from "../styles/Signup.module.css";
import Form from "./Form";
import TextInput from "./TextInput";
import CheckBox from "./CheckBox";
import Button from "./Button";

function SignupForm() {
  return (
    <>
      <Form className={`${classes.signup}`}>
        <TextInput type="text" placeholder="Enter name" icon="person" />

        <TextInput
          type="text"
          placeholder="Enter email"
          icon="alternate_email"
        />

        <TextInput type="password" placeholder="Enter password" icon="lock" />

        <TextInput
          type="password"
          placeholder="Confirm password"
          icon="lock_clock"
        />
        <CheckBox text="I agree to the Terms &amp; Conditions" />
        <Button>Submit Now</Button>
        <div className="info">
          Already have an account? <a href="login.html">Login </a> instead.
        </div>
      </Form>
    </>
  );
}

export default SignupForm;
