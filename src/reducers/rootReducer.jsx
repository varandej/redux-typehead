import { combineReducers } from 'redux';
import { typeheadReducer } from './typeheadReducer.jsx';
import { reducer as reduxFormReducer } from 'redux-form';

export const rootReducer = combineReducers({
    typehead: typeheadReducer,
    form : reduxFormReducer,
})