import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 2.2rem;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  ::placeholder {
    color: ${(props) => props.theme.colors.light};
  }

  button:disabled,
  button[disabled] {
    background-color: ${(props) => props.theme.colors.light} !important;
    color: ${(props) => props.theme.colors.white};

    &:hover {
      filter: unset;
      box-shadow: unset;
      cursor: not-allowed;
    }
  }

  html, body, #root {
    width: 100%;
    height: 100vh;
    font-size: 70%;
    font-family: 'Open Sans';
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.black}
  }

  *, button, input {
    border: none;
    outline: none;
    font-family: 'Roboto', sans-serif;
  }

  a, div, span, p {
    font-size: 1.6rem;
    text-decoration: none;

    &:hover {
      text-decoration: none;
    }
  }

  button {
    cursor: pointer;
  }
`;
