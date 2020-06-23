import React, {Component} from 'react';
import Axios from 'axios';

import UsertestCol from './UsertestCol'

class UsertestList extends Component {

    
    limit = 10; // 한 창에서 보여주는 컬럼의 개수
    indexCounter = 0; // 1/2/3/4/ 이런식으로 클릭하기 위해서 만드는
    boardlist = [];
    
    constructor(props) {
        super(props)
        this.state = {
            compList : [],
        } 
    }
    
    componentDidMount() {
        //여기서 리스트 목록 불러와서 저장
        Axios.get("http://localhost:1234/UserTest/read/").then(response => {
            console.log(response.data);
                
        return response.data; 

        }).then((val) => {
            this.setState({
                compList : [ ...val.map((val, k) => {
                   return <UsertestCol 
                    name = {val.name} 
                    age = {val.age} 
                    
                    />

               })]
                })
        })
        

    
        
    }
    /**
     * 
                <tr>
        
            
                <td>{name}</td>
                <td>{age}</td>
                <td><button onClick = {() => {
                  deleteCol();
                }
                }>삭제</button></td>
                </tr>
     * 
     * 
     */


   //  
    render() {
       

        // react에서는 thead tbody가 있어야한다 
    return (
        <div>
            <table border="1">
            <thead>
                <tr>
                <th>name</th>
	            <th>age</th>

                </tr>
                </thead>
            <tbody>
                {this.state.compList}
            </tbody>
         
            </table>

        
        </div>
            
        );
    }

}







export default UsertestList;
