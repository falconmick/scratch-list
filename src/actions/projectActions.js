import {UPDATE_STUDENT_SUCCESS} from '../constants/actionTypes';
import {beginAjaxCall, endAjaxCall, ajaxCallError} from './ajaxActions';
import StudentApi from '../api/StudentApi';

export function updateStudentSuccess(projects) {
  return {type: UPDATE_STUDENT_SUCCESS, projects};
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
