import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter} from "react-router-dom";
import {Provider} from 'react-redux'
import { createStore}  from 'redux' // 전역 데이터에 접근하기 위해 


import {composeWithDevTools } from 'redux-devtools-extension'

import {combineReducers } from 'redux'
import setLoginState from './modules/loginReducer' 

import counter3 from './modules/awetawte'

//4

let bindReducer = combineReducers({
  setLoginState,
  counter3,

});



//const store = createStore(login,composeWithDevTools());
const store = createStore(bindReducer,composeWithDevTools());

ReactDOM.render(

 
  <Provider store = {store}>
  <BrowserRouter>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </BrowserRouter>
  </Provider>

,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
