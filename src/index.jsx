import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components/macro';

import { GlobalStyle, globalTheme } from './theme/globalStyle';
import Todo from './components/Todo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={globalTheme}>
    <GlobalStyle />
    <Todo />
  </ThemeProvider>
);
