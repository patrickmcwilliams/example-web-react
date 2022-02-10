import React from 'react';
import { MuiThemeProvider } from "material-ui/styles";
import { BrowserRouter, Link } from 'react-router-dom';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './store/store';
import Routes from './routes/routes';

function App() {
  return (
    <Provider store={store}>
    <MuiThemeProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </MuiThemeProvider>
  </Provider>

  );
}

export default App;
