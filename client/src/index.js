import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import { Store } from "./store"
import axios from "axios"
import dotenv from "dotenv";
dotenv.config();

axios.defaults.baseURL = "https://videogames5.onrender.com" || "http://localhost:3001";

// PROVIDER: TODA LA APP VA A TENER ACCESO A MIS ESTADOS
ReactDOM.render(
  <Provider store= {Store}> 
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
