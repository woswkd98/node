import {createAction, handleActions} from 'redux-actions'

const LOGIN ='login/LOGIN';
const LOGOUT = 'login/LOGOUT';

export const login = createAction(
    LOGIN, 
    input => ({
        id : input.id,
        token : input.token,
    }));
export const logout = createAction(
    LOGOUT,
    input => ({
        id : '',
        token : '',
    }));





    

const initalState = {

}
const loginState = handleActions(
    {

    }

)