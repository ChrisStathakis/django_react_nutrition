import {CURRENT_USER_REQUEST} from "../general_views/actionTypes";


const initialState = {
    username: '',
    id: '',
    email: ''
};


export default function authReducer(state=initialState, action) {
    switch (action.type){
        case CURRENT_USER_REQUEST:
            return {
                username: action.payload.username,
                id: action.payload.id,
                email: action.payload.email
            }
        default:
            return state
    }
}