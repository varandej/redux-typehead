// @flow

import { combineReducers } from 'redux';
import typehead from './typehead';
import type { Action } from '../types/Action';

const reducers = { typehead };

export type Reducers = typeof(reducers);

export const rootReducer = combineReducers<Object, Action>(reducers);

