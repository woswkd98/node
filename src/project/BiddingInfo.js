//여기에는 회사 후기 가격 회사 전화번호 옵션 등등을 넣음


import React, { useState, useEffect } from 'react';
import Axios from 'axios';
 const BiddingInfo = (props) => {
    useEffect(() => {
        Axios.post(
            '/api/board/delete',
            {company : props.match.params.companyName}
        ).then(res => {
            
        });
    })


    return (
        <div>
            
        </div>
    )
}

export default BiddingInfo;