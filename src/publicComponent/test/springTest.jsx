import React, { Component } from 'react';
import Axios from 'axios';
class springTest extends Component {

    constructor(props) {
        super(props)
        this.state = {
            text : '',
        } 
    }

    componentDidMount() {
        //여기서 리스트 목록 불러와서 저장
        Axios.get("http://localhost:1234/").then(res => {
            console.log(res);
            
            this.setState({
                text : res.data
            })
        })
    }
    render() {
        return (
            <div>
                {this.state.text}
            </div>
        );
    }
}

export default springTest;