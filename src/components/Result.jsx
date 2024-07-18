import React, { useEffect, useState } from "react";

export default function Result({ response, userAnswers }) {
  const [actualAnswers, setActualAnswers] = useState([]);
  const [score, setScore] = useState(0);
  console.log(response, "response");

  function checkScore() {
    let currentScore = 0;
    for (let i = 0; i < userAnswers.length; i++) {
      if (userAnswers[i] == actualAnswers[i]) {
        console.log(
          "userAnswer",
          userAnswers[i],
          "actualans",
          actualAnswers[i]
        );
        currentScore++;
      }
    }
    setScore(currentScore);
  }

  useEffect(() => {
    const newActualAnswers = [];
    response.forEach((e) => {
      Object.keys(e.correct_answers).forEach((element) => {
        if (e.correct_answers[element] === "true") {
          newActualAnswers.push(e.correct_answers[element]);
        }
      });
    });
    setActualAnswers(newActualAnswers);
  }, [response]);

  useEffect(() => {
    if (actualAnswers.length > 0) {
      checkScore();
    }
  }, [actualAnswers, userAnswers]);
  console.log(userAnswers, "userans");
  return (
    <div>
      <h2>Result</h2>
      <p>
        Your score is {score} out of {userAnswers.length}
      </p>
    </div>
  );
}
