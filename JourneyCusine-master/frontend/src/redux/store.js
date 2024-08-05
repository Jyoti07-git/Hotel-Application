// Example of rootReducer
import { combineReducers } from 'redux';
import someReducer from './someReducer';

const rootReducer = combineReducers({
  someState: someReducer,
  // other reducers
});

export default rootReducer;
