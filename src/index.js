import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles'



const theme = createMuiTheme({
  palette: {
    primary: {
      main:"rgba(99, 209, 152, 0.8)",
      light:"#fff",
      
    },
    
    secondary: {
      light: '#ff7961',
      main: '#fff',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
  typography: {
    h5: {
      fontSize: "30px",
      color:"#fff"
    },
    h6: {
      color:"#fff"
    },
    subtitle2: {
      color:"#fff"
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
