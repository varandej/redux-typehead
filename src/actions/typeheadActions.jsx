import Axios from 'axios';  

export const CHANGE_SELECT_DSIPLAY = 'CHANGE_SELECT_DISPLAY';
export const GET_DATA_REQUEST = 'GET_DATA_REQUEST';
export const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS';
export const GET_DATA_ERROR = 'GET_DATA_ERROR';

export function changeSelectDisplay(boolean) {
    return dispatch => {
        dispatch ({
            type: CHANGE_SELECT_DSIPLAY,
            payload: boolean,
        })
    }
}

export function getData(url, name) {
    return dispatch => {
        dispatch ({
            type: GET_DATA_REQUEST,
            payload: name,
        })

        if(name.length > 2) {
            const fullUrl = url + name;
            Axios.get(fullUrl)
            .then((response) => {
                dispatch ({
                    type: GET_DATA_SUCCESS,
                    payload: response.data,
                })
            })
            .catch((error) => {
                dispatch ({
                    type: GET_DATA_ERROR,
                })
            })
        }
    }
}