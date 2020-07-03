import React, {Component} from 'react';
import Axios from 'axios';
import {connect} from 'react-redux'
//import setLoginState ,{ rdLogin, rdLogout} from '../modules/loginReducer'
import LinkButton from '../publicComponent/LinkButton'

class BoardNew extends Component {
    

    constructor(props) {
        super(props);
        this.title = React.createRef();
        this.body = React.createRef();
        
    }

    submit = async () => {

      
        
        let datas = {
            id : localStorage.getItem('userID'),
            token : localStorage.getItem('userToken'),
            title :   this.title.current.value, 
            body : this.body.current.value,
        };
        

        if(datas.title === '' || datas.body ===  ''){
         
            alert('제목 또는 내용이 작성되지 않았습니다')
            return;
        }
        
        await Axios.post('/api/board/boardNew', datas).then(
            res => {
                if(res.data.rs === '작성 완료') {
                    // 작성 완료

                }
                else if(res.data.rs === '인증 만료'){
                    // 작성 실패 // 로그인 페이지로 감
                    
                }
            }
        );

       //console.log( this.props.store.getState().userID);
        
    }

/*
<LinkButton to = '/boardList'>Index</LinkButton>
        <LinkButton to='/boardList'
            onClick={this.submit}>submit</LinkButton>
       
*/

    render() {

        return (
        <div>
                
         title<input type="text" ref = {this.title}></input>
         <br></br>
         body<textarea ref = {this.body} rows="5"></textarea>    
              
         <LinkButton to='/boardList'
            onClick={this.submit}>submit</LinkButton>

       </div>

        
        );
    }
}

export default (BoardNew);

//export default BoardNew;