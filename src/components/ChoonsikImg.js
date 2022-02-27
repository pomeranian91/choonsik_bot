import React, { useState } from "react";
import styled from "styled-components";

const ChoonsikImg = ({ currentAnswer }) => {
  const [imageSource, setImageSource] = useState([
    "https://item.kakaocdn.net/do/c5c470298d527ef65eb52883f0f186c4b3a18fdf58bc66ec3f4b6084b7d0b570",
    "https://item.kakaocdn.net/do/c5c470298d527ef65eb52883f0f186c49f17e489affba0627eb1eb39695f93dd",
    "https://item.kakaocdn.net/do/c5c470298d527ef65eb52883f0f186c415b3f4e3c2033bfd702a321ec6eda72c",
    "https://item.kakaocdn.net/do/c5c470298d527ef65eb52883f0f186c44022de826f725e10df604bf1b9725cfd",
  ]);
  const imgNum = Math.round(Math.random() * 3);

  return (
    <Container>
      <img src={currentAnswer === "???" ? "https://item.kakaocdn.net/do/b5d3d6a7b67fbf5afdaffb79fffbf8b141d1a2caccd0c566eab28b91e2e5d306" : `${imageSource[0]}`} />
    </Container>
  );
};
export default ChoonsikImg;

const Container = styled.div`
  width: 200px;
  margin: 15px auto;
`;
