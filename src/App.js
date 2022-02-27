import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ChoonsikText from "./components/ChoonsikText";
import InputContainer from "./components/InputContainer";

const App = () => {
  const [choonSikSay, setChoonSikSay] = useState("헤이! 난 춘식이에요!");

  return (
    <Container>
      <ChoonsikText choonSikSay={choonSikSay} />
      <HomeImg>
        <img src="https://item.kakaocdn.net/do/c5c470298d527ef65eb52883f0f186c4b3a18fdf58bc66ec3f4b6084b7d0b570" />
      </HomeImg>
      <InputContainer />
    </Container>
  );
};

export default App;

const HomeImg = styled.div`
  width: 200px;
`;
const Container = styled.div`
  ${({ theme }) => theme.flexMinin("column", "center", "center")};
`;
