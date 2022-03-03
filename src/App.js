import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ChoonsikImg from "./components/ChoonsikImg";
import ChoonsikText from "./components/ChoonsikText";
import InputContainer from "./components/InputContainer";
import RecentlyAnswer from "./components/RecentlyAnswer";
import TeacherAnswer from "./components/TeacherAnswer";

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState("");
  const [currentAnswer, setCurrentAnswer] = useState("헤이! 난 춘식이에요!");
  const [teachQuestion, setTeachQuestion] = useState(["안녕", "앉아", "춘식아"]);
  const [teachAnswer, setTeachAnswer] = useState(["하이!", "싫어!", "녜~"]);
  const [addAnswer, setAddanswer] = useState("");
  const [chatObject, setChatObject] = useState({});
  const AddTeachQuestion = () => {
    setTeachQuestion([...teachQuestion, currentQuestion]);
    setTeachAnswer([...teachAnswer, addAnswer]);
    setCurrentAnswer("헤이! 난 춘식이에요!");
  };
  const AddTeachAnswer = (e) => {
    setAddanswer(e.target.value);
  };

  return (
    <Container>
      <RecentlyAnswer setTeachQuestion={setTeachQuestion} teachAnswer={teachAnswer} teachQuestion={teachQuestion} />
      {currentAnswer === "???" ? <TeacherAnswer AddTeachQuestion={AddTeachQuestion} AddTeachAnswer={AddTeachAnswer} setCurrentAnswer={setCurrentAnswer} /> : null}
      <ChoonsikImg currentAnswer={currentAnswer} />
      <ChoonsikText currentAnswer={currentAnswer} />
      <InputContainer teachQuestion={teachQuestion} teachAnswer={teachAnswer} setCurrentAnswer={setCurrentAnswer} currentQuestion={currentQuestion} setCurrentQuestion={setCurrentQuestion} />
    </Container>
  );
};

export default App;

const Container = styled.div`
  ${({ theme }) => theme.flexMinin("column", "center", "center")};
  height: 100vh;
`;
