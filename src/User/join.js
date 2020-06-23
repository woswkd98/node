import React, { Component } from 'react'

import  axios  from 'axios';

//https://hee-kkk.tistory.com/22




export default class Join extends Component {

    constructor(props) {
        super(props);
        this.idRef = React.createRef();
        this.pwdRef = React.createRef();
        this.nameRef = React.createRef();
        this.emailRef = React.createRef();
    }
     submit = async() => {
        // current.value가 아니라 그냥 
        
        /*
        let datas = {
            id : this.idRef.value,
            pwd : this.pwdRef.value,
            name : this.nameRef.value,
            email : this.emailRef.value,
        }*/
        //test
        let datas = { 
            id : "woswkd98", 
            pwd : "1234ttac321",
            name : "최진흥",
            email : "woswkd98@naver.com"
        }
        // 회원가입한 아이디와 비밀번호를 넣어주고 확인해서 에러 문구를 넣어준다
        
       return await axios.post(
            '/api/user/userRegister', datas)
            /*
            .then(res => {
                if(!res.isSuitable) {
                    alert(res.body.error);
                    return;
                }
            });
             */
       

    
        //return <Link to = "/main"></Link>
    }
        
        
         
        
     
     
        
  
    render() {
        return (
            <div>
                <h1>새 계정</h1>
                id : <input type = "text" ref = {r => this.idRef = r}></input>
                pwd : <input type = "text" ref = {r => this.pwdRef = r}></input>
                name :  <input type = "text" ref = {r => this.nameRef = r}></input>
                email : <input type = "text" ref = {r => this.emailRef = r}></input>
                <button onClick = {this.submit}>전송</button>
            </div>
        )
    }
}
