import * as types from '../constants/actionTypes';
import initialState from './initialState';

export default function projectReducer(state = initialState.projects, action) {
  switch(action.type) {
    case types.UPDATE_STUDENT_SUCCESS:
      return [
        ...action.projects
      ];
    default:
      return state;
  }
}
