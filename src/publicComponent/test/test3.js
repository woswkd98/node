import React, { Component } from 'react'
import Axios  from 'axios';
export default class test3 extends Component {
    componentDidMount() {

        
            Axios.get('http://localhost:1234/webApi/hello')
            .then(response => {
                console.log(response);
            })    
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
