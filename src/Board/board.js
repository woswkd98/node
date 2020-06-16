import React, { Component } from 'react';

import LinkButton from '../publicComponent/LinkButton'

import Axios from 'axios';

class Board extends Component {
    constructor(props) {
        super(props)
        this.state = {
            post : {},
        } 
    }

    componentDidMount() {
        let data = {index : this.props.match.params.post_id}
         
        Axios.post('/api/board/board', data)
        .then(response => {
            let array = response.data.post;
            console.log(array);
            

            if(array.length === 0)
            {
                console.log("인덱스와 맞는 포스트가 없다");
                return;
            }

            this.setState({
                post : array[0]
            })
            
          
        })

        console.log(this.state.post,"qwA3ETAW");
        
    }

    //  
     
             
    render() {
        const linkPath = '/boardEdit/' + this.props.match.params.post_id;
        return (
            <div>
                <li>
                    {this.state.post.title}
                </li>
                <li>
                    {this.state.post.body}
                </li>
                <LinkButton to = '/boardList'>list</LinkButton> 
                <LinkButton to = {linkPath}>edit</LinkButton> 
                
            </div>
        
        
        );
    }
}

export default Board;