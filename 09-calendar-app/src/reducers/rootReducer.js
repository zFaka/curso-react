import {uiReducer} from "./uiReducer";
import {combineReducers} from 'redux';
import {calReducer} from "./calReducer";

export const rootReducer = combineReducers({
  ui:uiReducer, 
  cal:calReducer, 
  // auth:authReducer, 
})
