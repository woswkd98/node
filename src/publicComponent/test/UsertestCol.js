
import React from 'react';
import Axios from 'axios';

import PropTypes from 'prop-types';
import { Link,Redirect } from "react-router-dom";
import LinkButton from '../LinkButton';

const UsertestCol = (props) => {
    const {
        name,
        age,
      } = props;


    //  console.log(linkPath);
   const deleteCol = () => {
    
      // 나중엔 여기에 작성자도 추가할 예정      
       console.log();
       
        Axios.post('http://localhost:1234/UserTest/delete',name);
    }
        
    return (
           
                <tr>
                <td><Link onClick = {deleteCol}>{name}</Link></td>
                <td>{age}</td>
                </tr>


                
 
    );

          


}
UsertestCol.propTypes = {
    name: PropTypes.string.isRequired, // props에서 to는 스트링 형태여야하고
    age: PropTypes.number.isRequired,

}
export default UsertestCol;
