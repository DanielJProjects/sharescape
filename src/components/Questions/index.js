import Axios from "axios";
import React, { useEffect } from "react";
import { useGlobalContext } from "../../context";
import {
  QuestionsContainer,
  QuestionsWrapper,
  Question,
  Title,
  Buttons,
  ButtonsDiv,
  Yes,
  No,
  ResponsesDiv,
  Responses,
  Text,
  NoQ,
  Result,
  Results,
} from "./QuestionsElements";

const Questions = () => {
  const {
    noQYesterday,
    getResults,
    noAnswers,
    checkAnswer,
    showOptions,
    setShowOptions,
    yesterdayQ,
  } = useGlobalContext();

  useEffect(() => {
    checkAnswer();
    getResults();
  }, []);

  const scrambleResponse = (response) => {
    const choices = ["truth", "lie"];
    let choice = choices[Math.floor(Math.random() * choices.length)];

    if (choice === "truth") {
      return response;
    } else {
      const yesNo = ["yes", "no"];
      let newResp = yesNo[Math.floor(Math.random() * yesNo.length)];
      return newResp;
    }
  };

  const handleAnswer = (e) => {
    let response = scrambleResponse(e.target.name);
    setShowOptions(false);

    Axios.get(
      "https://sharescape-mysql.herokuapp.com/getMostRecentQuestion"
    ).then((res) => {
      let data = res.data[0];
      let questionId = data.questionId;
      let userId = localStorage.getItem("userId");

      Axios.post("https://sharescape-mysql.herokuapp.com/submitAnswer", {
        questionId: questionId,
        userId: userId,
        answer: response,
      });
    });
  };

  return (
    <>
      <QuestionsContainer>
        <QuestionsWrapper>
          <Title>Question of the Day</Title>
          <Question showOptions={showOptions}>
            {localStorage.getItem("question")}
          </Question>
          <ButtonsDiv showOptions={showOptions}>
            <Buttons>
              <Yes name="yes" onClick={handleAnswer}>
                Yes
              </Yes>
              <No name="no" onClick={handleAnswer}>
                No
              </No>
            </Buttons>
          </ButtonsDiv>
          <ResponsesDiv showOptions={showOptions}>
            <Responses>
              <Text>Thank you for your response!</Text>
              <Text>Come back tomorrow to see the results.</Text>
            </Responses>
          </ResponsesDiv>
        </QuestionsWrapper>
        <QuestionsWrapper>
          <Title>Yesterday's Results</Title>
          <NoQ noQYesterday={noQYesterday}>
            There was no question posted yesterday.
          </NoQ>
          <Results>
            <Question showOptions={false}>
              {localStorage.getItem("yesterdayQ")
                ? localStorage.getItem("yesterdayQ")
                : yesterdayQ}
            </Question>
            <ResponsesDiv>
              <Responses>
                <Result noAnswers={noAnswers}>
                  No answers were given yesterday.
                </Result>
                <Result noAnswers={!noAnswers}>
                  {localStorage.getItem("yesPerc")}% said 'Yes'
                </Result>
                <Result noAnswers={!noAnswers}>
                  {localStorage.getItem("noPerc")}% said 'No'
                </Result>
              </Responses>
            </ResponsesDiv>
          </Results>
        </QuestionsWrapper>
      </QuestionsContainer>
    </>
  );
};

export default Questions;
