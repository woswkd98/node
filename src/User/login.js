import React, { useState } from 'react'
import  Axios  from 'axios';

import { instanceOf } from 'prop-types';

// 쿠키쓰는 양식까지
const Login = (props) => {

   
    let idRef = React.createRef();
    let pwdRef = React.createRef();    
    

   
    let submit = async() => {
        
        let datas = { 
            id : idRef.current.value, 
            pwd :pwdRef.current.value, //"1234ttac321",
        };

     
        
        await Axios.post("/api/user/login",datas).then(
            (res) => {

                
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

export default Login;