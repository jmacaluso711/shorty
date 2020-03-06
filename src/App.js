import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

import UrlForm from './components/UrlForm';

const theme = {
  primary: '#667EEA',
  primarydark: '#5A67D8',
  secondary: '#ED64A6',
  secondaryDark: '#D53F8C',
  red: '#E53E3E',
  black: '#1A202C',
  grey: '#2D3748',
  lightgrey: '#718096',
  offWhite: '#F7FAFC',
  maxWidth: '1000px',
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
}

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  
  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${theme.offWhite};
  }

  ul {
    margin: 0;
    padding: 0;
  }

  li {
    list-style-type: none;
  }

  a {
    text-decoration: none;
    color: ${theme.black};
  }
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="App">
        <UrlForm />
      </div>
    </ThemeProvider>
  );
}

export default App;
