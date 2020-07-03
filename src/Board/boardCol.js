
import React from 'react';
import Axios from 'axios';

import PropTypes from 'prop-types';
import { Link,Redirect } from "react-router-dom";
import LinkButton from '../publicComponent/LinkButton';

const BoardCol= (props) => {
    const {
        index,
        title,
        createdAt,
        updatedAt,
        auth,
        history,
      } = props;


  const linkPath = '/board/' + index;
     console.log(linkPath);
   const deleteCol = () => {
    
      // 나중엔 여기에 작성자도 추가할 예정      
        let temp =  {
          id : localStorage.getItem('userID'),
          token : localStorage.getItem('userToken'),
          index : index
        
        };
        Axios.post('/api/board/delete',temp);
      
        
        return <Redirect to = "/board/List"></Redirect>
    }
        
    return (
           
                <tr>
                <td>{index}</td>
                <td>{auth}</td>
                <td>
                <Link to = {linkPath}>
                    {title}
                  </Link>
                </td>
                <td>{createdAt}</td>
                <td>{updatedAt}</td>
                <td><button onClick = {() => {
                  deleteCol();
                }
                }>삭제</button></td>
                </tr>
    );

          


}
BoardCol.propTypes = {
    title: PropTypes.string.isRequired, // props에서 to는 스트링 형태여야하고
    createdAt: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired, // child는 노드형태여야한다
  }
export default BoardCol;
