import React from "react";
import styled from "styled-components";

const InputContainer = ({ currentAnswer, setCurrentAnswer, currentQuestion, setCurrentQuestion, teachAnswer, teachQuestion }) => {
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
    if (e.key == "Enter") {
      answerText();
    }
  };

  return (
    <Container>
      <TextInput type="text" placeholder="춘식에게 말을 가르쳐주세요" onKeyPress={enterText} onChange={changeEvent}></TextInput>
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
`;
const QuestionButton = styled.button`
  margin: 10px auto;
  cursor: pointer;
`;
