import React from "react";
import CheckBox from "./CheckBox";
import classes from "../styles/Answers.module.css";

function Answers() {
  return (
    <div className={classes.answers}>
      <CheckBox className={classes.answer} text="test answers" />
    </div>
  );
}

export default Answers;
