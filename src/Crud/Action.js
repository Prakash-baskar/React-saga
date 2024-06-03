// import axios from "axios";
// import { ADD_ITEM } from "./Type";
// import { MY_SAMPLE_URL } from "./service/Api";


import {  ADD_ITEM_REQUEST, GET_BY_ID_REQUEST, GET_ITEMS_REQUEST } from "./Type"



export const addItem = (user) =>({

type:ADD_ITEM_REQUEST,
payload:user


})

export const getItem = () =>({
    type:GET_ITEMS_REQUEST,

})

export const getById = (id) =>({
    type:GET_BY_ID_REQUEST,
    payload:id,
})
