import React, { useReducer } from 'react';
import Routes from './routes/routes';
import { ThemeProvider } from 'react-jss';

import { StateContext } from 'store/store';
import initialState from 'store/initialState';
import { reducer } from 'reducers';

import theme from 'styles/theme';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StateContext.Provider value={{ state, dispatch }}>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </StateContext.Provider>
  );
}

export default App;
