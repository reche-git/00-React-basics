import styled, {
  css,
  keyframes,
  ThemeProvider,
  createGlobalStyle,
} from "styled-components";

export default function StyledComponents() {
  let mainColor = `#db7093`,
    mainAlphaColor80 = `#db709380`;

  const setTransitionTime = (time) => `all ${time} ease-in-out`;

  const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
    100% {
      opacity: 1;
  }`;

  const MyH3 = styled.h3`
    padding: 2rem;
    text-align: center;
    color: ${(props) => props.color};
    color: ${(color) => color};
    color: ${({ color }) => color || "#000"};
    background-color: ${mainColor};
    transition: ${setTransitionTime("1s")};
    animation: ${fadeIn} 5s ease-out;
    width: 70%;
    margin: 1rem auto;

    ${({ isButton }) =>
      isButton &&
      css`
        margin: auto;
        max-width: 50%;
        border-radious: 0.25rem;
        cursor: pointer;
      `}

    &:hover {
      background-color: ${mainAlphaColor80};
    }
  `;

  const light = {
    color: "#222",
    bgColor: "#DDD",
  };

  const dark = {
    color: "#DDD",
    bgColor: "#222",
  };

  const Box = styled.div`
    padding: 1rem;
    margin: 1rem;
    color: ${({ theme }) => theme.color};
    background-color: ${({ theme }) => theme.bgColor};
    width: 70%;
    margin: 1rem auto;
  `;

  const BoxRounded = styled(Box)`
    border-radius: 1rem;
  `;

  const GlobalStyle = createGlobalStyle`
    h2 {
      padding: 2rem;
      background-color: #fff;
      color: #61dafb;
      text-transform: uppercase;
    }
    `;

  return (
    <>
      <GlobalStyle />{" "}
      {/*Este componente, al ser global, va a afectar a todo el proyecto*/}
      <h2>Styles-Componentes</h2>
      <p>You can also use libraries like "Styled-Components💅🏾"</p>
      <MyH3>h3 tag styled with Stiled-Components as "MyH3"</MyH3>
      <MyH3 color="#61dafb">
        h3 tag styled with Stiled-Components as "MyH3" and inline property
      </MyH3>
      <MyH3 isButton>h3 tag styled with Stiled-Components as "MyH3" and as a button</MyH3>
      <ThemeProvider theme={light}>
        <Box>"Light Box"</Box>
        <BoxRounded>"Rounded Light Box"</BoxRounded>
      </ThemeProvider>
      <ThemeProvider theme={dark}>
        <Box>"Dark Box"</Box>
        <BoxRounded>"Rounded Dark Box"</BoxRounded>
      </ThemeProvider>
    </>
  );
}
