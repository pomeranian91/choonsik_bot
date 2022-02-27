import React from "react";
import styled from "styled-components";

const TeacherAnswer = () => {
  return (
    <Container>
      <div>춘식이에게 대답을 가르쳐 주시겠어요?</div>
      <input type="text" placeholder="가르칠 대답을 적어주세요"></input>
      <div>
        <button>네</button>
        <button>아니오</button>
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
