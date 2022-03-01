import React from "react";
import styled from "styled-components";

const ChoonsikText = ({ currentAnswer }) => {
  return (
    <Container>
      <AnswerBox>{currentAnswer}</AnswerBox>
    </Container>
  );
};
export default ChoonsikText;

const Container = styled.div`
  margin: 15px auto;
`;
const AnswerBox = styled.div`
  font-size: 32px;
  font-family: "Black Han Sans", sans-serif;
  font-family: "Nanum Gothic Coding", monospace;
  font-family: "Nanum Pen Script", cursive;
`;
