// @flow

import type { Reducers } from '../reducers/rootReducer';

type ExtractFunctionReturn = <V>(v: (...args: any) => V) => V;

export type State = $ObjMap<Reducers, ExtractFunctionReturn>;
