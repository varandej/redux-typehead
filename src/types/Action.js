// @flow

import { 
    CHANGE_SELECT_DSIPLAY, 
    GET_DATA_REQUEST, 
    GET_DATA_SUCCESS,
    GET_DATA_ERROR,
} from '../actions/typeheadActions';
import type { Item } from './Typehead';

type ChangeSelectDisplayAction = { type: typeof CHANGE_SELECT_DSIPLAY, payload: Array<Item> };

type GetDataAction = { type: typeof GET_DATA_REQUEST
    | typeof GET_DATA_SUCCESS
    | typeof GET_DATA_ERROR, 
    payload?: string 
    | Array<Item>
};

export type Action = ChangeSelectDisplayAction
    | GetDataAction
;