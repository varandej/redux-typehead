// @flow

import typehead from './typehead';
import { combineReducers } from 'redux';
import type { Reducer } from 'redux;';
import type { State } from '../types/State';
import type { Action } from '../types/Action';

const reducers = { typehead };

export type Reducers = typeof(reducers);

export const rootReducer: Reducer<State, Action> = combineReducers(reducers);

