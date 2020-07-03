

//
import React, { useState ,useEffect} from 'react'
import BiddingMembers from './BiddingMembers'
import Axios from 'axios';

/*
 let requestSchema = mongoose.Schema({
    title : {type:String, required:true},
    userId : {type:String, required:true}, 
    detail : {type:String, required:true},
    category : {type:String, required:true},
    uploadAt : {type:String, required:true},
    deadLine : {type:String, required:true},
    tags : [new mongoose.Schema({tag : String})]
});

*/


const RequestDetail = (props) => {
    const [product, setAuth] = useState('');
    const [tags, setTags] = useState([]);
    const [category, setCategory] = useState('');
    const [upload, setUpload] = useState('');
    const [requestId, setRequestId] = useState('');
    const {
        userId,
        title,
    } = props;

    useEffect(() => {
        Axios.post('/api/biding/requestDetail', {
            id : userId,
            title : title 
        }).then(res => {
            console.log(res);
        });
    });


    return (
        <div>
        </div>
    )

}

export default RequestDetail;