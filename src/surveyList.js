import React, { Component } from 'react';
import  axios  from 'axios';
class SurveyResult extends Component {


    constructor(props) {
        super(props)
        this.state = {
            manCat : 0,
            manDog : 0,
            womanCat : 0,
            womanDog : 0,
        }
    }

    
        
    componentDidMount() {
        


        axios.get("/api/survey/surveyList")
            .then(response => {
                console.log(response.data);
               // let data = response.data.datas.data;
                let data = response.data;          
               
                this.setState({
                    manCat : data.manCat,
                    manDog : data.manDog,
                    womanCat : data.womanCat,
                    womanDog :data.womanDog
                });
              
            })
    }
    render() {
        return (
            <div>
                <li>남자 고양이{this.state.manCat}</li>
                <li> 남자 개 {this.state.manDog}</li>
                <li> 여자 고양이 {this.state.womanCat}</li>
                <li>여자 개{this.state.womanDog}</li>
            </div>
        );
    }
}

export default SurveyResult;