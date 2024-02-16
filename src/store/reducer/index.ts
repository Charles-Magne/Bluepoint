import { combineReducers } from "redux";
import formReducer from "./formReducer";
import pageReducer from './pageReducer';

const rootReducer = combineReducers({
  form: formReducer,
  page: pageReducer,
});
  
  export default rootReducer;