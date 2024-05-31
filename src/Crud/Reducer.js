
import { ADD_ITEM } from './Type'

const initialValue = {
    users:[],
    user:null,
 
}



const Reducer = (state = initialValue, action) => {
    switch (action.type) {
        case ADD_ITEM:
            return{
                ...state,
                users:[...state.users,action.payload]
            };
            default:
            return state;
    }
  
}

export default Reducer
