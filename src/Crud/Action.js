import axios from "axios";
import { ADD_ITEM } from "./Type";
import { MY_SAMPLE_URL } from "./service/Api";


export const addItem = (user) => { 
    
    return async (dispatch) => {
        try {
            const response = await axios.post(`${MY_SAMPLE_URL}`, user);
            console.log(response);
            dispatch({ type: ADD_ITEM, payload: response.data });
        } catch (error) {

            console.error("Error adding item:", error);
        }
    };
};
