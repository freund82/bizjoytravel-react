import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Catalog from './catalog'



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
    <BrowserRouter>
    <ThemeProvider theme={theme}>
    <Switch>
         <Route exact path="/test" component={App}/>
         <Route exact path="/test/catalog" component={Catalog}/>
    </Switch>
    </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
