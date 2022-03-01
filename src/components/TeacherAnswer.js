import React from "react";
import styled from "styled-components";

const TeacherAnswer = ({ setCurrentAnswer, AddTeachQuestion, AddTeachAnswer }) => {
  return (
    <Container>
      <div>춘식이에게 대답을 가르쳐 주시겠어요?</div>
      <input type="text" placeholder="가르칠 대답을 적어주세요" onChange={AddTeachAnswer}></input>
      <div>
        <button onClick={AddTeachQuestion}>네</button>
        <button
          onClick={() => {
            setCurrentAnswer("춘춘...");
          }}
        >
          아니오
        </button>
      </div>
    </Container>
  );
};
export default TeacherAnswer;

const Container = styled.div`
  ${({ theme }) => theme.flexMinin("column", "", "center")};
  margin: 15px auto;
  padding: 15px;
  background-color: orange;
`;
