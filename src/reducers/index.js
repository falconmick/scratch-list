const tmpReducer = (state = {}) => {
  return state;
};

// Set up your root reducer here...
import {combineReducers} from 'redux';

const rootReducer = combineReducers({tmpReducer});

export default rootReducer;
