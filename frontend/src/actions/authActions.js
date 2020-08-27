import {CURRENT_USER_ENDPOINT} from "../tools/endpoints";
import {CURRENT_USER_REQUEST} from "../general_views/actionTypes";
import axiosInstance from "../tools/helpers";


export const getUserData =() => dispatch=>{
    axiosInstance.get(CURRENT_USER_ENDPOINT)
        .then(respData=>{
            dispatch({
                type: CURRENT_USER_REQUEST,
                payload: respData.data
            })
        })
}