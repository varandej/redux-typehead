// @flow

import type { Item } from './Typehead';

type ChangeSelectDisplayAction = { type: 'CHANGE_SELECT_DISPLAY', payload: Array<Item> };

type GetDataAction = { type: 'GET_DATA_REQUEST'
    | 'GET_DATA_SUCCESS'
    | 'GET_DATA_ERROR', 
    payload?: string | Array<Item>
};

export type Action = ChangeSelectDisplayAction
    | GetDataAction
;