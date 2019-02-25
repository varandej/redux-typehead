import { combineReducers } from 'redux';
import { typeheadReducer } from './typehead.jsx';

export const rootReducer = combineReducers({
    typehead: typeheadReducer,
})