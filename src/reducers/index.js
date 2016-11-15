// Set up your root reducer here...
import {combineReducers} from 'redux';
import projects from './projectReducer';
import page from './pageReducer';
import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
  projects,
  page,
  routing: routerReducer
});

export default rootReducer;
