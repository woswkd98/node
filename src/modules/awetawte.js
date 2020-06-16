
import {createAction, handleActions} from 'redux-actions'


const initialState = {
    number: 0
}//2

const INCREASE = "awetawte/INCREASE";
const DECREASE =  "awetawte/DECREASE";
export const increase3 = createAction(INCREASE)
export const decrease3 = createAction(DECREASE)

//33
const counter3 = handleActions({ // 스토어에서 변경을 캐치하고 여기서 변경된 값을 리턴해준다 
    [INCREASE] : (state, {payload : input}) => ({
        number : input.a + 1,

    }), 
    [DECREASE] : (state,  {payload : output}) => ({
        number : output.a - 1,

     })
}, initialState);

export default counter3;

/*
const counter3 = handleActions({ // 스토어에서 변경을 캐치하고 여기서 변경된 값을 리턴해준다 
    [INCREASE] : (state, {payload : input}) => ({
        number : input.a + 1,

    }), 
    [DECREASE] : (state,  {payload : output}) => ({
        number : output.a - 1,

     })
}, initialState);

*/
