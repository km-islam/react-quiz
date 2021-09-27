import React from "react";
import classes from "../styles/Analysis.module.css";
import Question from "./Questions";
function Analysis({ answers }) {
  return (
    <div class={classes.analysis}>
      <h1>Question Analysis</h1>
      <Question answers={answers} />
    </div>
  );
}

export default Analysis;
