import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;

    margin: 0;
    padding: 0;
  }

  html {
    overflow-y: scroll;
  }

  html,
  body {
    width: 100%;
    min-height: 100vh;

    display: flex;
    justify-content: center;

    background: #f3f7fa;
  }

  #__next {
    width: 100%;
    max-width: 754px;
    min-height: 100vh;

    position: relative;
  }

  ul {
    list-style: none;
  }

  img {
    display: block;
  }

  a {
    text-decoration: none;
  }

  button {
    background: transparent;
    border: none;
    cursor: pointer;
  }

  [disabled] {
    pointer-events: none;
  }
`;
