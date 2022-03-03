import React from "react";
import styled from "styled-components";
import cancel from "../image/icon-cancel.png";

const RecentlyAnswer = ({ teachQuestion, teachAnswer, setTeachQuestion }) => {
  return (
    <Container>
      <div>최근 알려준 대화</div>
      <AnswerContainer>
        {teachQuestion.map((a, index) => {
          return (
            <AnswerBox key={index}>
              {a}
              <img src={cancel} />
            </AnswerBox>
          );
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
  ${({ theme }) => theme.flexMinin("row", "center", "center")};
  padding: 5px;
  margin: 5px;
  border: 1px solid black;
  border-radius: 5px;
  cursor: pointer;
  & img {
    width: 15px;
    margin-top: 2px;
    margin-left: 3px;
  }
`;
