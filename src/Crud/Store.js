// import { configureStore } from "@reduxjs/toolkit";
import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga"
import Reducer from "./Reducer";
import rootSaga from "./Saga";


const sagaMiddleware = createSagaMiddleware();

const store = createStore(Reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;