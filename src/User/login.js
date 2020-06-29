import React, { useState } from 'react'
import  Axios  from 'axios';
import {connect} from 'react-redux'
import loginReducer, {login, logout} from '../redux/reducers/loginReducer'

const Login = ({login, onlogout}) => {

   
    let idRef = React.createRef();
    let pwdRef = React.createRef();    
       
    let submit = async() => {
        
        /*
        let datas = { 
            id : idRef.current.value, 
            pwd :pwdRef.current.value, //"1234ttac321",
        };*/
        let datas = { 
            id : "woswkd98",
            pwd :"1234ttac321"
        }
 
        await Axios.post("/api/user/login",datas).then(
            (res) => {
                
                console.log(res);
                if(res.data.auth !==  null && res.data.token !== null) {
                    login({
                        id : res.data.auth,
                        token : res.data.token
                    });
                
                    localStorage.setItem('userID', JSON.stringify(res.data.auth));
                    localStorage.setItem('userToken', JSON.stringify(res.data.token));
                    
                }    
            }
        )

        
    }
    
 
    return (
        <div>
            id : <input type = "text" ref = {idRef}></input>
            pwd : <input type = "text" ref = {pwdRef}></input>
    
            <button onClick = {submit}>전송</button>
            
        </div>
    )
    
}



export default connect(
    state =>  ({
        id : state.id,
        token : state.token  
    }), {
        login,
    }
    

)(Login);