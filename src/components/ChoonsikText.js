import React from "react";
import styled from "styled-components";

const ChoonsikText = ({ currentAnswer }) => {
  return (
    <Container>
      <div>{currentAnswer}</div>
    </Container>
  );
};
export default ChoonsikText;

const Container = styled.div`
  margin: 15px auto;
`;
