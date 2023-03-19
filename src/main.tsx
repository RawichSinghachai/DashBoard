import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// import './index.css'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import {store} from './stores/store'
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { red } from '@mui/material/colors';


const theme = createTheme({
  // palette: {
  //   primary: {
  //     main: red[500],
  //   },
  // },
});



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)