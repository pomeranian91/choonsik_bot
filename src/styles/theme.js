const theme = {
  flexMinin: (direction = "row", justify = "center", align = "center") => `
        display:flex;
        flex-direction: ${direction};
        justify-content: ${justify};
        align-items: ${align};
    `,
  
};

export default theme;
