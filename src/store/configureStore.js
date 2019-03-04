// @flow

import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from '../reducers/rootReducer';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import type { Store } from '../types/Store';

export const store: Store = createStore(rootReducer, applyMiddleware(thunk, logger));