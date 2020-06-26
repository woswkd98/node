import React, { useState } from 'react'
import  Axios  from 'axios';
import { withCookies, Cookies }  from  'react-cookie'
import { instanceOf } from 'prop-types';

// 쿠키쓰는 양식까지
const Login = (props) => {

   
    let idRef = React.createRef();
    let pwdRef = React.createRef();    
    const {
        cookies,

    } = props

    const [name, setName] = useState('');
    let submit = async() => {
        
        let datas = { 
            id : idRef.current.value, 
            pwd :pwdRef.current.value, //"1234ttac321",
        };

     
        
        await Axios.post("/api/user/login",datas).then(
            (res) => {
                console.log(res.data.auth)
                console.log(res.data.token)
              
                cookies.set('id',res.data.auth ,{ path: '/' });
                cookies.set('token',res.data.token,{ path: '/' });
                
                setName(cookies.get('id'));
                console.log(cookies.get('id'),"test");
                
            }
        )

        
     
    }
    
 
    return (
        <div>
            id : <input type = "text" ref = {idRef}></input>
            pwd : <input type = "text" ref = {pwdRef}></input>
            awetyawety{name}
            <button onClick = {submit}>전송</button>
            
        </div>
    )
    
}

Login.propTypes = {
    cookies: instanceOf(Cookies).isRequired
}
  
export default withCookies(Login);