import React, {Component} from 'react';
import Axios from 'axios';

import BoardCol from './boardCol'
import LinkButton from '../publicComponent/LinkButton'


class BoardList extends Component {

    
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
        Axios.get("/api/board/").then(response => {
            return response.data.posts; 

        }).then((val) => {
            this.setState({
                compList : [ ...val.map((val, k) => {
                    return <BoardCol 
                    title = {val.title}
                    createdAt = {val.createdAt}
                    updatedAt = {val.updatedAt}
                    index = {val.post_id}
                />})]
                })
        })
    
        
    }



   //  
    render() {
       

        // react에서는 thead tbody가 있어야한다 
    return (
        <div>
            <table border="1">
            <thead>
                <tr>
                <th>Index</th>
	            <th>title</th>
	            <th>createdAt</th>
                <th>updatedAt</th>
                <th>delete</th>
                </tr>
                </thead>
            <tbody>
                {this.state.compList}
            </tbody>
         
            </table>

            <LinkButton to = '/boardNew'>New</LinkButton>
        </div>
            
        );
    }

}







export default BoardList;
