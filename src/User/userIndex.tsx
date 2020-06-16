import * as React from 'react';
import Axios from 'axios';
export interface IUserIndexProps {
}
/*
let userSchema = mongoose.Schema({
    userId:{type:String, required:true},
    hashedPwd:{type:String, required:true},
    name:{type:String, required:true},
    email:{type:String, required:true},
});
*/

class userSchema {
    
    userId = String();
    hashedPwd = String();
    name = String();
    email = String();
};


export default class UserIndex extends React.Component<IUserIndexProps> {
    componentDidMount() {

        Axios.get("http://localhost:3001/user/userList").then(response => {
            return response.data.posts; 
        }).then(val => {
            
        })
    
        
    }
  
    public render() {
    return (
      <div>
        <table>
            <thead>
                <tr>
                <th>userId</th>
	            <th>createdAt</th>
                <th>email</th>
                </tr>
            </thead>
            <tbody>
              
            </tbody>
                
            </table>
      </div>
    );
  }
}
