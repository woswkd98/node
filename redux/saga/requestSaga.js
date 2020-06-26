import {call, put} from 'redux-saga/effects'
import {finishLoading, startLoading} from '../reducers/loading'
export default function createRequestSaga(type, req) {
    const SUCCESS = '${type}_SUCCESS';
    const FAILURE = '${type}_FAILURE';
    return function*(action) {
        yield put(startLoading(type));
        try {
            const response = yield call(req,action.payload);
            yield put({
                type :SUCCESS,
                payload : response.data
            });


        } catch(e) {
            yield put({
                type :FAILURE,
                payload : e,
                error : true,
            });
        }
        yield put(finishLoading(type));


    }
} 


