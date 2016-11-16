import * as types from '../constants/actionTypes';
import initialState from './initialState';
import _ from 'underscore';

export default function projectReducer(state = initialState.projects, action) {
  let newProjIdList = [];
  switch(action.type) {
    case types.UPDATE_STUDENT_SUCCESS:
      newProjIdList = action.projects.map(proj => proj.id);
      return [
        ...state.filter(proj => !_.contains(newProjIdList, proj.id)),
        ...action.projects.map(proj => Object.assign({}, proj))
      ];
    default:
      return state;
  }
}
