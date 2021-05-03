import {
    SET_USER_PURCHASES,
    SET_PURCHASE_DETAIL
} from "../actions/types";

const INTIAL_STATE = {
    purchases: [],
    purchaseDetail: {}
}

export default function(state = INTIAL_STATE, action) {
    switch (action.type) {
        case SET_USER_PURCHASES:
            
            return {
                ...state,
                purchases: action.payload
            }
        
        case SET_PURCHASE_DETAIL:
            let purchaseDetail;
            state.purchases.map(purchase => {
                if (purchase._id === action.payload) {
                    purchaseDetail = purchase;
                }
            })

            return {
                ...state,
                purchaseDetail
            }
    
        default: return state;
    }
}