import React, { useState } from 'react'
import BiddingMember from './BiddingMemberCol'
import Axios from 'axios'


const BiddingMembers = (props) => {
    const [memList, setMemList] = useState([]);
    const {
        requestName,
    } = props;

    Axios.post("/api/board/", {
        product : requestName
    }).then(response => {
        return response.data.posts; 
    }).then((val) => {
        setMemList({
            compList : [ ...val.map((val, k) => {
                return <BiddingMember 
                companyName = {val.userID}
                price = {val.price}
                updatedAt = {val.updatedAt}
            />})]
            })
    })

    return (
        <div>
        <table border="1">
            <thead>
            <tr>
            <th>companyName</th>
            <th>price</th>
            <th>updatedAt</th>
            </tr>
            </thead>
        <tbody>
            {memList}
        </tbody>
     
        </table>
        </div>
    )
}



export default BiddingMembers;
