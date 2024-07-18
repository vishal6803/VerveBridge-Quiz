import React from "react";
import Result from "./Result";
function Question({ response, handleBtnClick, currentQuestion, userAnswers }) {
  // if (
  //   !response ||
  //   !response.question ||
  //   !response.answers ||
  //   !response.correct_answers
  // ) {
  //   return <div>Loading...</div>;
  // }

  return (
    <div className="mt-5">
      {response ? (
        <div>
          <div>
            <h2 className="">
              {currentQuestion + 1}. {response.question}
            </h2>
          </div>
          <div>
            <ul>
              {Object.keys(response.answers).map((ans, index) =>
                response.answers[ans] !== null ? (
                  <li className="list-group-item" key={ans + index}>
                    <button
                      onClick={() =>
                        handleBtnClick(
                          response.correct_answers[ans + "_correct"]
                        )
                      }
                      className="btn btn-outline-success text-black border-black w-75 my-2"
                    >
                      {response.answers[ans]}
                    </button>
                  </li>
                ) : null
              )}
            </ul>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Question;
