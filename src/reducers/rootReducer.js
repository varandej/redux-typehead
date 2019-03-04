// @flow

import { combineReducers } from 'redux';
import typehead from './typehead';

const reducers = { typehead };

export type Reducers = typeof(reducers);

export const rootReducer = combineReducers(reducers);

