const theme = {
  flexMinin: (direction = "row", justify = "center", align = "center") => `
        display:flex;
        flex-direction: ${direction};
        justify-content: ${justify};
        align-items: ${align};
    `,
  //     font-family: 'Black Han Sans', sans-serif;
  // font-family: 'Nanum Gothic Coding', monospace;
  // font-family: 'Nanum Pen Script', cursive;
  // font-family: 'Noto Sans KR', sans-serif;
};

export default theme;
