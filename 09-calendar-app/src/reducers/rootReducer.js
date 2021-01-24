import {uiReducer} from "./uiReducer";
import {combineReducers} from 'redux';
import {calReducer} from "./calReducer";
import {authReducer} from './authReducer';

export const rootReducer = combineReducers({
  ui:uiReducer, 
  cal:calReducer, 
  auth:authReducer, 
})
