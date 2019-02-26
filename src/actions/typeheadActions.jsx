import Axios from 'axios';  

export const CHANGE_SELECT_DSIPLAY = 'CHANGE_SELECT_DISPLAY';
export const GET_DATA_REQUEST = 'GET_DATA_REQUEST';
export const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS';
export const GET_DATA_ERROR = 'GET_DATA_ERROR';
import _ from 'lodash';

let lastData = '';
let cache = [];
let dataArr = [];

function searchInCache(name) {
    let data = [];
    dataArr.forEach((item) => {
        if (item.name.includes(name) 
        || item.name.includes(name.toLowerCase())) {  
            data.push(item);
        }
    })
    return data;
}

function searchThroughApi(url, name, dispatch) {
    if(name.length > 2) {
        const fullUrl = url + name;
        Axios.get(fullUrl)

        .then((response) => {
            let responseData = response.data;
            if (cache.indexOf(name) === -1) cache.push(name);
            dataArr = _.unionBy(dataArr, responseData, 'name');
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

export function changeSelectDisplay(data) {
    if( data.length > 0) {
        lastData = data;
        data = '';
    } else {
        data = lastData;
    }
    return dispatch => {
        dispatch ({
            type: CHANGE_SELECT_DSIPLAY,
            payload: data,
        })
    }
}

export function getData(url, name) {
    return dispatch => {
        dispatch ({
            type: GET_DATA_REQUEST,
            payload: name,
        })

        if (cache.indexOf(name) !== -1
        && name.length > 2) {
            let data = searchInCache(name);
            dispatch ({
                type: GET_DATA_SUCCESS,
                payload: data,
            })
        } else {
            searchThroughApi(url, name, dispatch); 
        }
    }
}