import React, { Component } from 'react'
import Axios from 'axios'
import LinkButton from '../publicComponent/LinkButton'
export default class BoardEdit extends Component {
    

    constructor(props) {
        super(props);
        this.title = React.createRef();
        this.body = React.createRef();
    }

    submit =  () => {
        let datas = {
            post_id : this.props.match.params.post_id,
            title :   this.title.current.value, 
            body : this.body.current.value,
        };
        if(datas.title === '' || datas.body ===  ''){
         
            //alert('제목 또는 내용이 작성되지 않았습니다')
            return;
        }
    
        
        
        Axios.post('api/board/boardEdit', datas);
        
        
    }


    

    componentDidMount() { 
        
    }


    render() {
        const linkPath = '/board/' + this.props.match.params.post_id;
        return (
            <div>
                
                title<input type="text" ref = {this.title}></input>
                <br></br>
                body<textarea ref = {this.body} rows="5"></textarea>  
           
                <LinkButton to = {linkPath} onClick = {this.submit}>awetawe</LinkButton>

            </div>
        )
    }
}
