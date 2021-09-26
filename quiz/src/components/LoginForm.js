import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import classes from "../styles/Login.module.css";
import Form from "./Form";
import TextInput from "./TextInput";
import Button from "./Button";
import { useAuth } from "../contexts/AuthContext";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState();
  const [loading, setLoading] = useState();
  const history = useHistory();

  const { login } = useAuth();
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await login(email, password);
      history.push("/");
    } catch (err) {
      console.log(err);
      setError("Failed to Login");
      setLoading(false);
    }
  }
  return (
    <>
      <Form className={`${classes.signup}`} onSubmit={handleSubmit}>
        <TextInput
          type="text"
          placeholder="Enter email"
          icon="alternate_email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <TextInput
          type="password"
          placeholder="Enter password"
          icon="lock"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button disabled={loading} type="submit">
          <span>Log in</span>
        </Button>
        {error && <p className="error">{error}</p>}
        <div className="info">
          Don't have an account? <Link to="/signup">Signup</Link> instead.
        </div>
      </Form>
    </>
  );
}

export default LoginForm;
