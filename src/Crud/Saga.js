import { all, call, put, takeEvery } from "redux-saga/effects";
import { ADD_ITEM_REQUEST, ADD_ITEM_SUCCESS, GET_BY_ID_REQUEST, GET_BY_ID_SUCCESS, GET_ITEMS_REQUEST, GET_ITEMS_SUCCESS } from "./Type";

import axios from "axios";
import {API} from "./service/Api"

// watching Saga - Action 
function* watchAddItem(){
  yield takeEvery(ADD_ITEM_REQUEST,addItemSaga)
}

function* getByItem(){
    yield takeEvery(GET_ITEMS_REQUEST,getItemSaga)
}

function* getByIds(){
    yield takeEvery(GET_BY_ID_REQUEST,getByIdSaga)
}


// Worker Saga - Reducer
function* addItemSaga(action){
    try{
        const response = yield call(axios.post, API, action.payload);

        yield put({type:ADD_ITEM_SUCCESS, payload: response.data});
    }
    catch(error){
        console.log("error",error)
    }
}

function* getItemSaga(){
    try{
        const response = yield call(axios.get, API);

        yield put({type:GET_ITEMS_SUCCESS, payload: response.data});
    }
    catch(error){
        console.log("error",error)
    }
}

function* getByIdSaga(action){
    try{
        const response = yield call(axios.get,`${API}/${action.payload}`);

        yield put({type:GET_BY_ID_SUCCESS, payload: response.data});
    }
    catch(error){
        console.log("error",error)
    }
}


export default function* rootSaga(){
    yield all([
        watchAddItem(),
        getByItem(),
        getByIds(),
    ]);
}