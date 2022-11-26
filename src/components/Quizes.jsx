import React from "react";
import Quiz from "./Quiz";
import { nanoid } from "nanoid";
import shuffle from "./shuffle";

export default function Quizes() {
  // INITIALIZING STATE WHICH STORES DATA
  const [data, setData] = React.useState([]);
  const [count, setCount] = React.useState(0);
  const [showResult, setShowResult] = React.useState(false);
  const [total, setTotal] = React.useState(0);

  // INTIALIZING STATE END
  // FETCHING DATA
  React.useEffect(() => {
    fetch(
      "https://opentdb.com/api.php?amount=4&category=9&difficulty=easy&type=multiple"
    )
      .then((res) => res.json())
      .then((data) =>
        setData(() =>
          data.results.map((item) => {
            const obj = {
              id: nanoid(),
              question: item.question,
              incorrect_answers: item.incorrect_answers,
              correct_answer: item.correct_answer,
              options: shuffle([
                {
                  id: nanoid(),
                  value: item.incorrect_answers[0],
                  isSelected: false,
                },
                {
                  id: nanoid(),
                  value: item.incorrect_answers[1],
                  isSelected: false,
                },
                {
                  id: nanoid(),
                  value: item.incorrect_answers[2],
                  isSelected: false,
                },
                { id: nanoid(), value: item.correct_answer, isSelected: false },
              ]),
            };
            return { ...obj };
          })
        )
      );
  }, []);
  // FETCHING DATA END

  // HANDLING CLICK EVENTS ON OPTIONS
  function handleClick(e) {
    if (showResult) return;
    const value = e.target;
    const question = e.target.closest(".question");
    setData((prevData) => {
      return prevData.map((item) => {
        if (item.id == question.id) {
          for (const i of item.options) {
            if (i.id == value.id) i.isSelected = true;
            else i.isSelected = false;
          }
          return item;
        } else return item;
      });
    });
  }
  // END OF HANDLING CLICK EVENTS

  // COUNTING NUMBER OF SELECTIONS OF USER
  React.useEffect(() => {
    let total = 0;
    for (const i of data) {
      for (const x of i.options) {
        x.isSelected && total++;
      }
    }
    setCount(total);
  }, [data]);
  // COUNTING NUMBER OF SELECTIONS END

  function handleShowResult() {
    if (count != 4) return;
    setShowResult(true);
    calculateCorrect();
  }
  function handlePlayAgain() {
    setShowResult(false);
    location.reload();
  }

  // LOOPING OVER ELEMENTS TO RENDER QUIZ
  const quizElements = data.map((el) => {
    return (
      <Quiz
        questionID={el.id}
        optionsID={el.options}
        key={nanoid()}
        question={el.question}
        optionSelected={el.options}
        options={el.options.map((item) => item.value)}
        onClick={handleClick}
        showResult={showResult}
        correct_answer={el.correct_answer}
      />
    );
  });
  // RENDER QUIZ END
  function calculateCorrect() {
    const userSelected = [];
    const correct_answer = [];
    for (const i of data) {
      correct_answer.push(i.correct_answer);
      for (const x of i.options) {
        if (x.isSelected) userSelected.push(x.value);
      }
    }
    let total = 0;
    for (let i = 0; i < userSelected.length; i++) {
      if (userSelected[i] == correct_answer[i]) total++;
    }
    setTotal(total);
  }

  ////////////////////
  return (
    <div className="container">
      {quizElements}
      {showResult ? (
        <>
          <button onClick={handlePlayAgain} className="btn btn--quiz">
            Play again
            <p>You scored {total}/4 correct answers</p>
          </button>
        </>
      ) : (
        <button onClick={handleShowResult} className="btn btn--quiz">
          Check answers
        </button>
      )}
    </div>
  );
}
