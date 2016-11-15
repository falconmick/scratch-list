import * as types from '../constants/actionTypes';
import initialState from './initialState';

export default function projectReducer(state = initialState.projects, action) {
  switch(action.type) {
    case types.SET_PROJECT_ID:
      state.projectId = action.projectId; // no need to cloen as numbers are always copied
      return state;
    default:
      return state;
  }
}
