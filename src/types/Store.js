// @flow

import type { 
    Store as ReduxStore, 
    Dispatch as ReduxDispatch 
} from 'redux';
import type { Action } from './Action';
import type { State } from './State';

export type Store = ReduxStore<State, Action>;
type GetState = () => State;
type PromiseAction = Promise<Action>;
type ThunkAction = (dispatch: Dispatch, getState: GetState) => any;
export type Dispatch = (action: Action | ThunkAction | PromiseAction | Array<Action>) => any;
