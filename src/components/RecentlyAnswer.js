import React from "react";
import styled from "styled-components";

const RecentlyAnswer = ({ teachQuestion }) => {
  return (
    <Container>
      <div>최근 알려준 대화</div>
      <AnswerContainer>
        {teachQuestion.map((a, index) => {
          return <AnswerBox key={index}>{a}</AnswerBox>;
        })}
      </AnswerContainer>
    </Container>
  );
};
export default RecentlyAnswer;

const Container = styled.div`
  ${({ theme }) => theme.flexMinin("column", "", "center")};
  margin: 15px auto;
`;
const AnswerContainer = styled.div`
  ${({ theme }) => theme.flexMinin("row", "center", "center")};
`;
const AnswerBox = styled.div`
  padding: 5px;
  margin: 5px;
  border: 1px solid black;
  border-radius: 5px;
`;
