import React, { useState } from "react";

function Questionnaire() {
  const [index, setIndex] = useState(0);
  const [index1, setIndex1] = useState(0);
  const [optionselected, setOptionSelected] = useState("");
  const [questID, setQuestID] = useState("");
  let total = 0;

  const questions = [
    {
      quest:
        "How many hours a week do you spend in your car or on your motorbike for personal use including commuting?",
      options: [
        "Under 2 hours",
        "2-8 hours",
        "8-15 hours",
        "More than 15 hours",
      ],
      qID: "food1",
    },
    {
      quest:
        "How many hours a week do you spend on the train for personal use including commuting?",
      options: ["train", "2-8 hours", "More than 15 hours"],
      qID: "food2",
    },
    {
      quest:
        "How many hours a week do you spend on the bus for personal use including commuting?",
      options: ["Under 2 hours", "2-8 hours", "8-15 hours"],
      qID: "food3",
    },
    {
      quest:
        "In the last year, how many return flights have you made in total to the following locations?",
      options: [
        "Under 2 hours",
        "2-8 hours",
        "8-15 hours",
        "More than 15 hours",
      ],
      qID: "food4",
    },
    {
      quest:
        "In the last year, how many return flights have you made in total to the following locations?",
      options: [
        "Under 2 hours",
        "2-8 hours",
        "8-15 hours",
        "More than 15 hours",
      ],
      qID: "travel1",
    },
    {
      quest:
        "In the last year, how many return flights have you made in total to the following locations?",
      options: [
        "Under 2 hours",
        "2-8 hours",
        "8-15 hours",
        "More than 15 hours",
      ],
      qID: "travel2",
    },
    {
      quest:
        "In the last year, how many return flights have you made in total to the following locations?",
      options: [
        "Under 2 hours",
        "2-8 hours",
        "8-15 hours",
        "More than 15 hours",
      ],
      qID: "travel3",
    },
    {
      quest:
        "In the last year, how many return flights have you made in total to the following locations?",
      options: [
        "Under 2 hours",
        "2-8 hours",
        "8-15 hours",
        "More than 15 hours",
      ],
      qID: "travel4",
    },
  ];

  const optionValue = {
    food1: {
      "Under 2 hours": 3,
      "2-8 hours": 4,
      "8-15 hours": 5,
      "More than 15 hours": 7,
    },
    food2: {
      train: 6,
      "2-8 hours": 9,
      "More than 15 hours": 1,
    },
    food3: {
      "Under 2 hours": 1,
      "2-8 hours": 3,
      "8-15 hours": 5,
    },
    food4: {
      "Under 2 hours": 7,
      "2-8 hours": 8,
      "8-15 hours": 9,
      "More than 15 hours": 1,
    },
    travel1: {
      "Under 2 hours": 7,
      "2-8 hours": 8,
      "8-15 hours": 9,
      "More than 15 hours": 1,
    },
    travel2: {
      "Under 2 hours": 7,
      "2-8 hours": 8,
      "8-15 hours": 9,
      "More than 15 hours": 1,
    },
    travel3: {
      "Under 2 hours": 7,
      "2-8 hours": 8,
      "8-15 hours": 9,
      "More than 15 hours": 1,
    },
    travel4: {
      "Under 2 hours": 7,
      "2-8 hours": 8,
      "8-15 hours": 9,
      "More than 15 hours": 1,
    },
  };

  const type = [
    {
      name: "Food",
      color: "bg-warning",
    },
    {
      name: "Travel",
      color: "bg-primary",
    },
    {
      name: "Home",
      color: "bg-info",
    },
    {
      name: "Others",
      color: "bg-danger",
    },
  ];

  const backquestionhandler = () => {
    if (index === 4) setIndex1(0);
    else if (index === 8) setIndex1(1);
    else if (index === 12) setIndex1(2);
    else if (index === 16) setIndex1(3);
    setIndex(index - 1);
  };

  const nextquestionhandler = () => {
    total += optionValue[questID][optionselected];
    if (index === 3) setIndex1(1);
    else if (index === 7) setIndex1(2);
    else if (index === 11) setIndex1(3);
    setIndex(index + 1);
  };

  const selectorhandler = (e, i) => {
    setOptionSelected(e);
    setQuestID(questions[i].qID);
  };

  return (
    <div>
      <div className="container-xxl">
        <div className="row">
          <div className="col-12 my-5 px-5">
            <div className="progress-top ">
              <div className="d-flex  justify-content-start align-item-center">
                <div className={`question-icon ${type[index1].color} p-3 mb-2`}>
                  <img
                    src="https://footprint.wwf.org.uk/icons/food.svg"
                    alt=""
                  />
                </div>
                <h4 className="mb-0 mt-1 ms-2">
                  {type[index1].name} Q{(index % 4) + 1} of 4
                </h4>
              </div>
              <div
                className="progress"
                role="progressbar"
                aria-label="Warning example"
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div
                  className={`progress-bar ${type[index1].color}`}
                  style={{ width: "50%" }}
                ></div>
              </div>
            </div>
            <div className="question-box mx-5 px-5 mt-4">
              <div className="question mb-2">
                <p>{questions[index].quest}</p>
              </div>
              <div className="option">
                {questions[index].options.map((e) => (
                  <div class="form-check mb-1">
                    <input
                      className="form-check-input"
                      type="radio"
                      value=""
                      id={index}
                      name="question"
                      onClick={() => selectorhandler(e, index)}
                    />
                    <label className="form-check-label" for="1">
                      {e}
                    </label>
                  </div>
                ))}
              </div>
              <div
                className={`d-flex ${
                  index === 0
                    ? "justify-content-end"
                    : "justify-content-between"
                }  mt-3`}
              >
                {index === 0 ? null : (
                  <button className="button" onClick={backquestionhandler}>
                    Back
                  </button>
                )}
                <button className="button" onClick={nextquestionhandler}>
                  Next Question
                </button>
              </div>
            </div>
          </div>
          <div className="col-12 px-5 mt-3 mb-5">
            <div className="row">
              <div className="col-3 px-4">
                <div className="d-flex justify-content-center">
                  <div className="question-icon bg-warning p-3 mb-2">
                    <img
                      src="https://footprint.wwf.org.uk/icons/food.svg"
                      alt=""
                    />
                  </div>
                  <h5 className="mb-0 mt-2 ms-1">Food</h5>
                </div>
                <div
                  className="progress"
                  role="progressbar"
                  aria-label="Warning example"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div
                    className="progress-bar bg-warning"
                    style={{ width: "75%" }}
                  ></div>
                </div>
              </div>
              <div className="col-3 px-4">
                <div className="d-flex justify-content-center">
                  <div className="question-icon bg-primary p-3 mb-2">
                    <img
                      src="https://footprint.wwf.org.uk/icons/food.svg"
                      alt=""
                    />
                  </div>
                  <h5 className="mb-0 mt-2 ms-1">Travel</h5>
                </div>
                <div
                  className="progress"
                  role="progressbar"
                  aria-label="Warning example"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div
                    className="progress-bar bg-primary"
                    style={{ width: "75%" }}
                  ></div>
                </div>
              </div>
              <div className="col-3 px-4">
                <div className="d-flex justify-content-center">
                  <div className="question-icon bg-info p-3 mb-2">
                    <img
                      src="https://footprint.wwf.org.uk/icons/food.svg"
                      alt=""
                    />
                  </div>
                  <h5 className="mb-0 mt-2 ms-1">Home</h5>
                </div>
                <div
                  className="progress"
                  role="progressbar"
                  aria-label="Warning example"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div
                    className="progress-bar bg-info"
                    style={{ width: "75%" }}
                  ></div>
                </div>
              </div>
              <div className="col-3 px-4">
                <div className="d-flex justify-content-center">
                  <div className="question-icon bg-danger p-3 mb-2">
                    <img
                      src="https://footprint.wwf.org.uk/icons/food.svg"
                      alt=""
                    />
                  </div>
                  <h5 className="mb-0 mt-2 ms-1">Others</h5>
                </div>
                <div
                  className="progress"
                  role="progressbar"
                  aria-label="Warning example"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div
                    className="progress-bar bg-danger"
                    style={{ width: "75%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Questionnaire;
