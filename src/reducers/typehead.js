// @flow

import { 
    CHANGE_SELECT_DSIPLAY, 
    GET_DATA_REQUEST, 
    GET_DATA_SUCCESS,
    GET_DATA_ERROR,
} from '../actions/typeheadActions';
import type { Action } from '../types/Action';
import type { Item } from '../types/typehead';

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

        case CHANGE_SELECT_DSIPLAY:
            return Object.assign({}, state, {
                data: action.payload
            });

        case GET_DATA_REQUEST:
            return Object.assign({}, state, {
                inputValue: action.payload
            });

        case GET_DATA_SUCCESS:
            return Object.assign({}, state, {
                data: action.payload,
            });

        case GET_DATA_ERROR:
            return Object.assign({}, state, {
                data: [],
            })

        default:
            return state
    }
}