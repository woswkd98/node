import React, { Component } from 'react'
import Axios from 'axios'
import LinkButton from '../LinkButton'
export default class UsertestU extends Component {
    constructor(props) {
        super(props);
        this.name = React.createRef();
        this.age = React.createRef();
    }

    submit = async () => {
        let datas = {

            name :   this.name.current.value, 
            age : this.age.current.value,
        };
        if(datas.name === '' || datas.age ===  ''){
         
            //alert('제목 또는 내용이 작성되지 않았습니다')
            return;
        }
    
        await Axios.post('http://localhost:1234/UserTest/update', datas);
   
        
    }


    

    componentDidMount() { 
        
    }


    render() {
       
        return (
            <div>
                
                name<input type="text" ref = {this.name}></input>
                <br></br>
                age<textarea ref = {this.age} rows="5"></textarea>  
                <button onClick = {this.submit}>업데이트</button>
               
            </div>
        )
    }
}
