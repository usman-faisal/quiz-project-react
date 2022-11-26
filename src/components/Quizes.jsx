import React from "react";
import Quiz from "./Quiz";
import { nanoid } from "nanoid";

export default function Quizes() {
  // INITIALIZING STATE WHICH STORES DATA
  const [data, setData] = React.useState([]);
  const [quizes, setQuizes] = React.useState([]);
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
              options: [
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
              ],
            };
            return { ...obj };
          })
        )
      );
  }, []);
  // FETCHING DATA END

  // HANDLING CLICK EVENTS ON OPTIONS
  function handleClick(e) {
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

    // const [selectedQuiz] = data.filter((x) => x.id == question.id);
    // const notSelectedQuiz = data.filter((x) => x.id != question.id);
    // console.log(selectedQuiz);
    // const selectedOption = selectedQuiz.options.map((x) =>
    //   x.id == value.id ? (x.isSelected = !x.isSelected) : x
    // );
    // const newArr = [...notSelectedQuiz, selectedQuiz];
    // console.log(newArr);
  }
  console.log(data);

  // END OF HANDLING CLICK EVENTS

  // LOOPING OVER ELEMENTS TO RENDER QUIZ
  const quizElements = data.map((el) => {
    return (
      <Quiz
        questionID={el.id}
        optionsID={el.options}
        key={nanoid()}
        question={el.question}
        optionSelected={el.options}
        options={[...el.incorrect_answers, el.correct_answer]}
        onClick={handleClick}
      />
    );
  });
  // RENDER QUIZ END

  // console.log(quiz[0]);
  ////////////////////
  return <div className="container">{quizElements}</div>;
}
