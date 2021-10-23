import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html { 
    background: url(images/bgImage.jpg) no-repeat center center fixed; 
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }

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

  h1,
  h2,
  h3,
  h4,
  h5 {
    font-family: 'Caveat', cursive;
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
    outline: none;
  }

  select::-ms-expand {
  display: none;
}
`;
