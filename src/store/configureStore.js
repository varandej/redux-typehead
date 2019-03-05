// @flow

import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from '../reducers/rootReducer';
import type { Store } from '../types/Store';

export const store: Store = createStore(rootReducer, applyMiddleware(thunk, logger));