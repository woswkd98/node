import React, { Component } from 'react'
import socketIOClient from 'socket.io-client'
export default class socket extends Component {
    constructor() {
        super();
        this.state = {
          response: false,
          endpoint: "http://127.0.0.1:3001"
        };
    }
    componentDidMount() {
       
    }
    onclick = () => {

    }

    render() {
        const { response } = this.state;
        return (
            <div>
          
 
            </div>
        )
    }
}
