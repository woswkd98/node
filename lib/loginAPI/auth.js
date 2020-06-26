import client from './client'
export const login = ({id, pwd}) => {
    client.post('/api/user/login', {id, pwd});
} 
export const register = (
    {id, pwd, name, email,}) => {
    client.post(
        '/api/user/userRegister', 
        {id, pwd, name, email});
}

export const check = (id, token) => {
    client.post('/api/user/check', {id, token});
}