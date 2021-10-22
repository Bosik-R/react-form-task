import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Ubuntu', sans-serif;
    color: #ffffff;
  }

  h1 {
    font-family: 'Dancing Script', cursive;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  input, select {
    appearance: none;
    border: none;
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    outline: none;
  }

  select::-ms-expand {
  display: none;
}
`;
