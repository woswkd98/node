import React, { Component } from 'react'
import  Axios  from 'axios';

export default class Login extends Component {

    constructor(props) {
        super(props);
        
        this.idRef = React.createRef();
        this.pwdRef = React.createRef();
        
       
        
    }


    submit = async() => {
        
        let datas = { 
            id : this.idRef.current.value, 
            pwd :this.pwdRef.current.value, //"1234ttac321",
        };
      
        
        await Axios.post("/api/user/login",datas);
            
         
    }


    render() {
        return (
            <div>
                id : <input type = "text" ref = {this.idRef}></input>
                pwd : <input type = "text" ref = {this.pwdRef}></input>
                <button onClick = {this.submit}>전송</button>
            </div>
        )
    }
}

