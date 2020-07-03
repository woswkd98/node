import React from 'react';
import Axios from 'axios';

import LinkButton from '../publicComponent/LinkButton';
import PropTypes from 'prop-types';
import { Link,Redirect } from "react-router-dom";

const BiddingMemberCol = (props) => {
    const {
        companyName,
        price,
        updatedAt,
    } = props;


  const linkPath = '/Bidding/' + companyName;
     console.log(linkPath);
  
  
        
    return (
           
                <tr>
                <td>
                  
                <Link to = {linkPath}>
                    {companyName}
                  </Link>
                </td>
                <td>{price}</td>
                <td>{updatedAt}</td>
                </tr>
      );

          


}

BiddingMemberCol.propTypes = {
    companyName: PropTypes.string.isRequired, // props에서 to는 스트링 형태여야하고
    price: PropTypes.number.isRequired,
  }
export default BiddingMemberCol;
