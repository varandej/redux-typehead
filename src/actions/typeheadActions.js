// @flow

import Axios from 'axios';
import _ from 'lodash';
import type { Action } from '../types/Action';
import type { Dispatch } from '../types/Store';
import type { Item } from '../types/Typehead';

export const CHANGE_SELECT_DISPLAY = 'CHANGE_SELECT_DISPLAY';
export const GET_DATA_REQUEST = 'GET_DATA_REQUEST';
export const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS';
export const GET_DATA_ERROR = 'GET_DATA_ERROR';

let lastData: Array<Item> = [];
let dataArr: Array<Item> = [];
let cache: Array<string> = [];

function searchInCache(name: string, data: Array<Item>): Array<Item> {
    dataArr.forEach((item) => {
        if (item.name.includes(name) 
        || item.name.includes(name.toLowerCase())) {  
            data.push(item);
        }
    })
    return data;
}

function searchThroughApi(url: string, name: string, dispatch: Dispatch) {
    if(name.length > 2) {
        const fullUrl = url + name;
        Axios.get(fullUrl)

        .then((response) => {
            cache.push(name);
            dataArr = _.unionBy(dataArr, response.data, 'name');
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

export function changeSelectDisplay(data: Array<Item>) {
    if( data.length > 0) {
        lastData = data;
        data = [];
    } else {
        data = lastData;
    }
    return (dispatch: Dispatch) => {
        dispatch ({
            type: CHANGE_SELECT_DISPLAY,
            payload: data,
        })
    }
}

export function getData(url: string, name: string) {
    return (dispatch: Dispatch) => {
        dispatch ({
            type: GET_DATA_REQUEST,
            payload: name,
        })

        if (cache.indexOf(name) !== -1 && name.length > 2) {
            let data: Array<Item> = [];
            data = searchInCache(name, data);
            dispatch ({
                type: GET_DATA_SUCCESS,
                payload: data,
            })
        } else {
            searchThroughApi(url, name, dispatch); 
        }
    }
}