import {UPDATE_STUDENT_SUCCESS, SET_PROJECT_ID} from '../constants/actionTypes';
import {beginAjaxCall, endAjaxCall, ajaxCallError} from './ajaxActions';
import StudentApi from '../api/StudentApi';

function updateStudentSuccess(projects) {
  return {type: UPDATE_STUDENT_SUCCESS, projects};
}

function setProjectId(projectId) {
  return {type: SET_PROJECT_ID, projectId}
}

export function updateStudentProjects(student) {
  return dispatch => {
    dispatch(beginAjaxCall());
    return StudentApi.getStudentProjects(student)
      .then(response => {
        dispatch(updateStudentSuccess(response.data));
        dispatch(endAjaxCall());
      })
      .catch(err => {
        dispatch(ajaxCallError(err));
        throw new Error(err);
      });
  };
}

export function setProjectId(projectId) {
  return dispatch => {
    dispatch(setProjectId());
  };
}
