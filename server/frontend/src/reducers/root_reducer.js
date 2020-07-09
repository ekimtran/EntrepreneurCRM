import { combineReducers } from 'redux';
import session from './session_reducer';
import entities from './entities_reducer';


export const rootReducer = combineReducers({
    entities,
    session,
});