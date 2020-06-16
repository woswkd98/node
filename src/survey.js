import React, { Component } from 'react';
import  axios  from 'axios';
import LinkButton from './publicComponent/LinkButton';

class Survey extends Component {
    

    constructor(props) {
        super(props);
        

        this.state = {
            animal : true,
            sex : true,
        }
    }



    onHandleAnimal = newAnimal => this.setState({ animal : newAnimal });
    onHandleSex = newSex => this.setState({ sex : newSex });
    // 이벤트 axios에 await를 걸면 느려진다
    submit = ()  => {
        /* */
        let datas = { 
            animal : this.state.animal,
            sex : this.state.sex,
        };

        axios.post('/api/survey', datas);   
         
        return this.props.history.push('/surveyList');
    }

    render() {
        return (
            <div>
                <form>
                남<input type="radio"  name ="sex" onChange = {() => this.onHandleSex(true) } defaultChecked = {true} value="남자"></input>
                여<input type="radio" name ="sex" onChange = {() => this.onHandleSex(false)} value="여자"></input>
                </form>
                <form>
                고양이<input type="radio" name ="animal" onChange = {() => this.onHandleAnimal(false)} value="고양이"></input>
                개    <input type="radio" name ="animal" onChange = {() => this.onHandleAnimal(true)} defaultChecked = {true}   value="개"></input>
                </form>
                <button onClick = {this.submit}>12341254</button>

            </div>
        );
    }
}

export default Survey;