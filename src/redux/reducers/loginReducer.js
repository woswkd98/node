import {createAction, handleActions} from 'redux-actions'

const LOGIN ='login/LOGIN';
const LOGOUT = 'login/LOGOUT';

export const login = createAction(
        LOGIN, 
        input => ({
            id : input.id,
            token : input.token
        })
    );
export const logout = createAction(
        LOGOUT,
        input => ({
            id : '',
            token : ''
        })
    );

const initalState = {

    id : '',
    token : ''
  
}
const loginReducer = handleActions(
    {
        [LOGIN] : (state, action) => ({
            id : action.payload.id,
            token : action.payload.token,
        }),
        [LOGOUT] : (state, action) => ({
            id : '',
            token :'',
        }),
    },
    initalState, 
)
export default loginReducer;