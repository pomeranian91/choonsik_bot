import React from "react";
import styled from "styled-components";

const InputContainer = ({ setCurrentAnswer, currentQuestion, setCurrentQuestion, teachAnswer, teachQuestion }) => {
  const changeEvent = (e) => {
    setCurrentQuestion(e.target.value);
  };
  const answerText = () => {
    for (let i = 0; i < teachQuestion.length; i++) {
      if (currentQuestion === teachQuestion[i]) {
        setCurrentAnswer(teachAnswer[i]);
        return;
      } else {
        setCurrentAnswer("???");
      }
    }
  };
  const enterText = (e) => {
    if (e.key === "Enter") {
      answerText();
    }
  };

  return (
    <Container>
      <TextInput type="text" placeholder="춘식에게 말을 걸어보세요" onKeyPress={enterText} onChange={changeEvent}></TextInput>
      <QuestionButton onClick={answerText}>대화하기</QuestionButton>
    </Container>
  );
};

export default InputContainer;
const Container = styled.div`
  ${({ theme }) => theme.flexMinin("column", "center", "center")};
  margin: 10px auto;
`;
const TextInput = styled.input`
  height: 20px;
  padding: 15px;
  border: 1px solid black;
  border-radius: 10px;
  text-align: center;
`;
const QuestionButton = styled.button`
  margin: 10px auto;
  font-size: 16px;
  font-weight: 600;
  color: #58c6e8;
  border: 1px solid #58c6e8;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    color: #000;
    background-color: #58c6e8;
  }
`;
