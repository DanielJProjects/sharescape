import styled from "styled-components";

export const QuestionsContainer = styled.div`
  width: 45%;
  color: #060606;
  font-family: "Manrope", sans-serif;
  font-size: 13px;
  margin-top: 50px;
  margin-left: 20px;
`;

export const QuestionsWrapper = styled.div`
  border-radius: 20px;
  box-shadow: 0px 0px 6px 1px #cccccc;
  padding: 40px 170px;
  text-align: center;
  margin-bottom: 20px;
`;

export const Title = styled.p`
  font-size: 18px;
  font-weight: 800;
  margin-top: 0;
  margin-bottom: 30px;
`;

export const Question = styled.div`
  font-size: 20px;
  margin-bottom: ${({ showOptions }) => (showOptions ? "25px" : "5px")};
  line-height: 30px;
`;

export const ButtonsDiv = styled.div`
  width: 100%;
  display: ${({ showOptions }) => (showOptions ? "flex" : "none")};
  justify-content: center;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 170px;
`;

export const Yes = styled.button`
  background-color: #ecb43e;
  padding: 10px 0px;
  border: none;
  border-radius: 50px;
  width: 70px;

  &:hover {
    cursor: pointer;
    background-color: #efbd54;
    transition: 0.2s ease-in-out;
  }
`;

export const No = styled.button`
  background-color: #e4655d;
  padding: 10px 0px;
  border: none;
  width: 70px;
  border-radius: 50px;

  &:hover {
    cursor: pointer;
    background-color: #eb746d;
    transition: 0.2s ease-in-out;
  }
`;

export const ResponsesDiv = styled.div`
  width: 100%;
  display: ${({ showOptions }) => (showOptions ? "none" : "flex")};
  justify-content: center;
`;

export const Responses = styled.div``;

export const Text = styled.p`
  margin-bottom: 0;
  font-size: 14px;
  margin-top: 10px;
`;

export const NoQ = styled.p`
  margin-bottom: 0;
  font-size: 14px;
  margin-top: 10px;
  display: ${({ noQYesterday }) => (noQYesterday ? "block" : "none")};
`;

export const Result = styled.p`
  margin-bottom: 0;
  font-size: 14px;
  margin-top: 10px;
  display: ${({ noAnswers }) => (noAnswers ? "block" : "none")};
`;

export const Results = styled.div`
  display: ${({ noQYesterday }) => (noQYesterday ? "none" : "block")};
`;
