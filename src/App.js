import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import Main from './components/Main';

const theme = {
  primary: '#667EEA',
  primaryDark: '#5A67D8',
  secondary: '#ED64A6',
  secondaryDark: '#D53F8C',
  tertiary: '#E53E3E',
  black: '#1A202C',
  white: '#fff',
  gray800: '#2D3748',
  gray700: '#4A5568',
  gray600: '#718096',
  gray400: '#CBD5E0',
  gray100: '#F7FAFC',
  maxWidth: '1280px',
  boxShadow: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
  borderRadius: '4px',
  borderRadiusSm: '2px'
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
    background-color: ${theme.gray800};
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
      <React.Fragment>
        <Main />
      </React.Fragment>
    </ThemeProvider>
  );
}

export default App;
