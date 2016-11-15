import * as types from '../constants/actionTypes';
import initialState from './initialState';

export default function projectReducer(state = initialState.page, action) {
  switch(action.type) {
    case types.SET_PROJECT_ID:
      return Object.assign({}, state, { projectId: action.projectId });
    case types.SET_PAGE_TITLE:
      return Object.assign({}, state, { pageTitle: action.pageTitle });
    default:
      return state;
  }
}
