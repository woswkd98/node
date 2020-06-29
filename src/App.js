import React, { Component } from 'react';

import './App.css';

import { Route } from "react-router-dom";
import BoardList from './Board/boardList'
import BoardNew from './Board/boardNew'
import Login from './User/login'
import Join from './User/join'
import Survey from './survey'
import SurveyList from './surveyList'
import Board from './Board/board'
import BoardEdit from './Board/boardEdit' 
import UserTestC from './publicComponent/test/UsertestC'
import UserTestU from './publicComponent/test/UsertestU'
import UserTestList from './publicComponent/test/UsertestList'
import TopHeader from './top/topHeader'

//import { response } from 'express'; 가끔 response라고 쓰면 얘가 이렇게 걸어버리는데 바로 에러뜬다 조심하자
import TestSocket from './publicComponent/test/socket'
import CookieRs from './publicComponent/test/CookieRs'

class App extends Component {
  
    


  render() {
    
    return (
        <div className="App">
          <Route path="/topHeader" component={TopHeader} />
          <Route path="/BoardNew" component={BoardNew} exact = {true} />  
          <Route path="/BoardList" component={BoardList} exact = {true}  />
          <Route path="/Login" component={Login} exact = {true}  />
          <Route path="/Join" component={Join} exact = {true}  />
          <Route path="/survey" component={Survey} exact = {true}  />
          <Route path="/surveyList" component={SurveyList} exact = {true}  />
          <Route path="/board/:post_id" component = {Board} exact = {true}/>
          <Route path="/boardEdit/:post_id" component = {BoardEdit} exact = {true}/>

          
          <button onClick = {
            () => {
              localStorage.setItem('userID', null);
              localStorage.setItem('userToken',null);
            }
          }>임시 로그아웃</button>
        </div>
    );
    ;
  }
}

export default App;



