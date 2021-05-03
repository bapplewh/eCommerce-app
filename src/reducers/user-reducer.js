import actions from "redux-form/lib/actions";
import {
    SET_USER_PURCHASES
} from "../actions/types";

const INTIAL_STATE = {
    purchases: []
}

export default function(state = INTIAL_STATE, action) {
    switch (action.type) {
        case SET_USER_PURCHASES:
            
            return {
                ...state,
                purchases: action.payload
            }
    
        default: return state;
    }
}