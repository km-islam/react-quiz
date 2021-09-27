import React from "react";
import classes from "../styles/Question.module.css";
import Answers from "./Answers";

function Questions({ answers = [] }) {
  return answers.map((answer, ind) => (
    <div className={classes.question} key={ind}>
      <div className={classes.qtitle}>
        <span className="material-icons-outlined"> help_outline </span>
        {answer.title}
      </div>
      <Answers input={false} options={answer.options} />
    </div>
  ));
}

export default Questions;
