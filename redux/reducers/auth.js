import {createAction, handleAction, handleActions} from 'redux-actions'
const SAMPLE_ACTION = 'auth/SAMPLE_ACTION'
export const SampleAction = createAction(SAMPLE_ACTION);
const initialState = {};
const auth = handleActions(
    {
        [SAMPLE_ACTION] : (state, action) => {
            
        },
        initialState,
    }
);
export default auth;