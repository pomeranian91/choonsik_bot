import React, { useState } from "react";
import styled from "styled-components";
import ChoonsikImg from "./components/ChoonsikImg";
import ChoonsikText from "./components/ChoonsikText";
import InputContainer from "./components/InputContainer";
import RecentlyAnswer from "./components/RecentlyAnswer";
import TeacherAnswer from "./components/TeacherAnswer";

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState("");
  const [currentAnswer, setCurrentAnswer] = useState("헤이! 난 춘식이에요!");
  const [teachAnswer, setTeachAnswer] = useState(["안녕", "앉아", "춘식아"]);
  const [textObject, setTextObject] = useState({ answer: { currentAnswer }, question: { currentQuestion } });
  const AddTeachAnswer = () => {
    setTeachAnswer([...teachAnswer, { currentQuestion }]);
  };
  console.log(textObject);
  console.log(currentAnswer);
  console.log(currentQuestion);
  return (
    <Container>
      <RecentlyAnswer teachAnswer={teachAnswer} />
      {currentAnswer === "???" ? <TeacherAnswer /> : null}
      <ChoonsikImg currentAnswer={currentAnswer} />
      <ChoonsikText currentAnswer={currentAnswer} />
      <InputContainer currentAnswer={currentAnswer} setCurrentAnswer={setCurrentAnswer} currentQuestion={currentQuestion} setCurrentQuestion={setCurrentQuestion} />
    </Container>
  );
};

export default App;

const Container = styled.div`
  ${({ theme }) => theme.flexMinin("column", "center", "center")};
  height: 100vh;
`;
