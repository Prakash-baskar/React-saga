
import {  ADD_ITEM_SUCCESS,GET_BY_ID_SUCCESS, GET_ITEMS_SUCCESS,  } from './Type'

const initialValue = {
    users:[],
    user:null,
 
}



const Reducer = (state = initialValue, action) => {
    switch (action.type) {
        case ADD_ITEM_SUCCESS:
            return{
                ...state,
                users:[...state.users,action.payload]
            };
        
        case GET_ITEMS_SUCCESS:
            return{
                ...state,
                users:action.payload,
            } 
            
        case GET_BY_ID_SUCCESS:
            return{
                ...state,
                user:action.payload,
            }    
       
            default:
            return state;
    }
  
}

export default Reducer
