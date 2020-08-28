import {CURRENT_USER_REQUEST, PROFILE_REQUEST} from "../general_views/actionTypes";


const initialState = {
    username: '',
    id: '',
    email: '',
    profile_id: '',
    weight: '',
    height: '',
    birth: '',
    workout_lvl: '',
    gender : '',
    tag_gender: '',
    calories: 0

};


export default function authReducer(state=initialState, action) {
    switch (action.type){
        case CURRENT_USER_REQUEST:
            return {
                username: action.payload.username,
                id: action.payload.id,
                email: action.payload.email
            };
        case PROFILE_REQUEST:

            return {
                profile_id: action.payload.id,
                weight: action.payload.weight,
                height: action.payload.height,
                birth: action.payload.birth,
                gender: action.payload.gender,
                tag_gender: action.payload.tag_gender,
                workout_lvl: action.payload.workout_lvl,
                bmi:action.payload.bmi,
                calories: action.payload.calories
            };
        default:
            return state
    }
};


