import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import classes from "../styles/Signup.module.css";
import Form from "./Form";
import TextInput from "./TextInput";
import CheckBox from "./CheckBox";
import Button from "./Button";
import { useAuth } from "../contexts/AuthContext";

function SignupForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agree, setAgree] = useState("");
  const [error, setError] = useState();
  const [loading, setLoading] = useState();
  const history = useHistory();

  const { signup } = useAuth();
  async function handleSubmit(e) {
    e.preventDefault();

    if (password !== confirmPassword) {
      return setError("password do not match");
    }
    try {
      setError("");
      setLoading(true);
      await signup(email, password, username);
      history.push("/");
    } catch (err) {
      console.log(err);
      setError("Failed to create an account");
      setLoading(false);
    }
  }

  return (
    <>
      <Form className={`${classes.signup}`} onSubmit={handleSubmit}>
        <TextInput
          type="text"
          placeholder="Enter name"
          required
          icon="person"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <TextInput
          type="text"
          placeholder="Enter email"
          required
          icon="alternate_email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <TextInput
          type="password"
          placeholder="Enter password"
          required
          icon="lock"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <TextInput
          type="password"
          required
          placeholder="Confirm password"
          icon="lock_clock"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <CheckBox
          text="I agree to the Terms &amp; Conditions"
          required
          value={agree}
          onChange={(e) => setAgree(e.target.value)}
        />
        <Button disabled={loading} type="submit">
          <span>Submit Now</span>
        </Button>

        {error && <p className="error">{error}</p>}
        <div className="info">
          Already have an account? <Link to="/login">Login</Link> instead.
        </div>
      </Form>
    </>
  );
}

export default SignupForm;
