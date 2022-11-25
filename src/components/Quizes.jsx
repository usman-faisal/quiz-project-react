import React from "react";
import Quiz from "./Quiz";
import { nanoid } from "nanoid";

export default function Quizes() {
  // INITIALIZING STATE WHICH STORES DATA
  const [quiz, setQuiz] = React.useState([]);

  // FETCHING QUIZES
  React.useEffect(() => {
    fetch(
      "https://opentdb.com/api.php?amount=4&category=9&difficulty=easy&type=multiple"
    )
      .then((res) => res.json())
      .then((data) => setQuiz(data.results));
  }, []);

  // LOOPING OVER ELEMENTS TO RENDER QUIZ
  const quizElements = quiz.map((el) => {
    return (
      <Quiz
        key={nanoid()}
        question={el.question}
        options={[...el.incorrect_answers, el.correct_answer]}
      />
    );
  });
  console.log(quiz);

  // console.log(quiz[0]);
  ////////////////////
  return <div className="container">{quizElements}</div>;
}
