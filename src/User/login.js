import React, { Component } from 'react'
//import  Axios  from 'axios';
import {connect} from 'react-redux'
import {rdLogin} from '../modules/loginReducer'
class Login extends Component {

    constructor(props) {
        super(props);
        this.idRef = React.createRef();
        this.pwdRef = React.createRef();
        
        
    }


    submit = async() => {
        /*
        let datas = { 
            id : this.idRef.current.value, 
            pwd :this.pwdRef.current.value, //"1234ttac321",
        };
      */
        /*
        await Axios.post(
            'api/user/login', datas).then(res=> {
                if(res.data.isLogin === true) {
                    
                    //로그인 확인
                    console.log("로그인 완료!");
                } 
            });
        
            */
           // redux 테스트
        this.props.onLogin('aawetawetawetgea');
        console.log(this.props.userID);
        
 
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

const stateToProps = (state) => ({
    userID: state.setLoginState.userID,
})
  

const mapDispatchToProps = (dispatch) => ({
    onLogin : (userID) => {
        dispatch(rdLogin(userID));
    },

});



export default connect(
    stateToProps,
    mapDispatchToProps
  )(Login); // 나중에 여기를 바꾸면 된다 