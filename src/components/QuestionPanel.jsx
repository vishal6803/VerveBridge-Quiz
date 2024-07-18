import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Question from "./Question";
import Result from "./Result";
function QuestionPanel() {
  const [response, setResponse] = useState([]);
  const [questions, setQuestions] = useState(10);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [difficulty, setDifficulty] = useState("Easy");
  const [category, setCategory] = useState("linux");
  const [userAnswers, setUserAnswers] = useState([]);
  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://quizapi.io/api/v1/questions?apiKey=uRKzEReYWHyreyFSMgIMnTFL9wj2cZW9ETwB9ZZV&category=${category}&difficulty=${difficulty}&limit=${questions}`,
        { method: "GET" }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setResponse(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, [difficulty, questions, category]);
  function handleBtnClick(ans) {
    setUserAnswers((prevAnswers) => [...prevAnswers, ans]);
    setCurrentQuestion((prevQuestion) => prevQuestion + 1);
  }
  console.log(response.correct_answers, "response");
  return (
    <>
      <div className="container-fluid p-0 text-center">
        <Navbar
          setDifficulty={setDifficulty}
          setQuestions={setQuestions}
          setCategory={setCategory}
        />
        {response.length > 0 ? (
          <Question
            response={response[currentQuestion]}
            handleBtnClick={handleBtnClick}
            currentQuestion={currentQuestion}
            userAnswers={userAnswers}
          />
        ) : (
          <p>Loading Questions.. {userAnswers.length >= questions}.</p>
        )}
        {userAnswers && userAnswers.length >= questions ? (
          <Result response={response} userAnswers={userAnswers} />
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default QuestionPanel;
