import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles'



const theme = createMuiTheme({
  palette: {
    primary: {
      main:"rgba(1, 179, 158, 0.8)",
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
    h1:{
      fontWeight:"bold",
      color:"#07665E",
      lineHeight:1.5,
    },
    h5: {
      fontSize: "30px",
      color:"#fff"
    },
    h6: {
      color:"#fff",
      lineHeight:1,
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
