// @flow

import { 
    CHANGE_SELECT_DISPLAY, 
    GET_DATA_REQUEST, 
    GET_DATA_SUCCESS,
    GET_DATA_ERROR,
} from '../actions/typeheadActions';
import type { Action } from '../types/Action';
import type { Item } from '../types/Typehead';

type State = {
    +data: Array<Item>,
    +inputValue: string
}

const initialState: State = { 
    data: [],
    inputValue: '',
}

export default function typehead(state: State = initialState, action: Action): State {
    switch (action.type) {

        case CHANGE_SELECT_DISPLAY:
            return Object.assign({}, state, {
                data: action.payload
            });

        case GET_DATA_REQUEST:
            if(typeof(action.payload) === 'string') {
                return Object.assign({}, state, {
                    inputValue: action.payload
                });
            }

        case GET_DATA_SUCCESS:
            if(typeof(action.payload) === 'object') {
                return Object.assign({}, state, {
                    data: action.payload,
                });
            }

        case GET_DATA_ERROR:
            return Object.assign({}, state, {
                data: [],
            })

        default:
            return state
    }
}