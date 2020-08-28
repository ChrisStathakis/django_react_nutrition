import {CURRENT_USER_ENDPOINT, PROFILES_ENDPOINT} from "../tools/endpoints";
import {CURRENT_USER_REQUEST, PROFILE_REQUEST} from "../general_views/actionTypes";
import axiosInstance from "../tools/helpers";





export function getUserData() {
    return function (dispatch) {
        console.log('signal');
        return axiosInstance.get(CURRENT_USER_ENDPOINT)
        .then(respData=>{
            console.log(respData)
            const id = respData.data.id;
            axiosInstance.get(PROFILES_ENDPOINT + `?user=${id}`)
                .then(response=>{
                    console.log(response);
                    dispatch({
                        type: PROFILE_REQUEST,
                        payload: response.data,
                        userload:respData.data
                    })
                })
        })

    }

}



export function getProfileData(endpoint) {
    return function(dispatch) {
        return axiosInstance.get(endpoint).then(respData=>{
            dispatch({
                type: PROFILE_REQUEST,
                payload: respData.data
            })
        });
    };
}

