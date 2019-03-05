// @flow

import type { Item } from './Typehead';

type ChangeSelectDisplayAction = { type: 'HANGE_SELECT_DSIPLAY', payload: Array<Item> };

type GetDataAction = { type: 'GET_DATA_REQUEST'
    | 'GET_DATA_SUCCESS'
    | 'GET_DATA_ERROR', 
    payload?: string 
    | Array<Item>
};

export type Action = ChangeSelectDisplayAction
    | GetDataAction
;