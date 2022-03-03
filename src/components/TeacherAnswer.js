import React from "react";
import styled from "styled-components";

const TeacherAnswer = ({ setCurrentAnswer, AddTeachQuestion, AddTeachAnswer }) => {
  return (
    <Container>
      <Header>춘식이에게 대답을 알려 주시겠어요?</Header>
      <input type="text" placeholder="알려줄 대답을 적어주세요" onChange={AddTeachAnswer}></input>
      <div>
        <BooleanButton onClick={AddTeachQuestion}>네</BooleanButton>
        <BooleanButton
          onClick={() => {
            setCurrentAnswer("춘춘...");
          }}
        >
          아니오
        </BooleanButton>
      </div>
    </Container>
  );
};
export default TeacherAnswer;

const Container = styled.div`
  ${({ theme }) => theme.flexMinin("column", "", "center")};
  margin: 15px auto;
  padding: 15px;
  background-color: #ffd677;
  border-radius: 5px;
  & input {
    width: 100%;
    padding: 5px 10px;
    background-color: white;
    text-align: center;
  }
`;
const Header = styled.div`
  margin-bottom: 8px;
`;
const BooleanButton = styled.button`
  width: 80px;
  margin: 3px;
  margin-top: 8px;
  font-size: 14px;
  font-weight: 700;
  color: #a37944;
  border: 1px solid #a37944;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    color: #000;
    background-color: #a37944;
  }
`;
