import {CURRENT_USER_ENDPOINT} from "../tools/endpoints";
import {CURRENT_USER_REQUEST, PROFILE_REQUEST} from "../general_views/actionTypes";
import axiosInstance from "../tools/helpers";


export const getUserData =() => dispatch=>{
    axiosInstance.get(CURRENT_USER_ENDPOINT)
        .then(respData=>{
            dispatch({
                type: CURRENT_USER_REQUEST,
                payload: respData.data
            })
        })
};


export const getProfileData = () => dispatch => {
    axiosInstance.get(PROFILE_REQUEST)
        .then(respData=>{
            dispatch({
                type: PROFILE_REQUEST,
                payload: respData.data
            })
        })
}