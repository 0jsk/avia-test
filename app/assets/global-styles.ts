import { createGlobalStyle } from 'styled-components';
import { theme } from '@app/assets/theme';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;

    margin: 0;
    padding: 0;
  }

  html,
  body {
    width: 100%;
    min-height: 100vh;

    display: flex;

    background: ${theme.color.secondary};
  }

  #root {
    width: 100%;
    min-height: 100vh;

    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    line-height: 1.4;
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
