import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: all 0.3s;
  }

  a {
    text-decoration: none;
  }

  img {
    max-width: 100%;
  }

  :focus {
    outline: none;
    /* box-shadow: 0 0 0 2px ${(props) => props.theme.primary}; */
  }

  body {
    background: ${(props) => props.theme.white};
    color: ${(props) => props.theme.gray};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: ${(props) => props.theme['font-default']}, sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }
`
