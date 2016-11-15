import {SET_PAGE_TITLE, SET_PROJECT_ID} from '../constants/actionTypes';

export function setProjectId(projectId) {
  return {type: SET_PROJECT_ID, projectId}
}

export function setPageTitle(pageTitle) {
  return {type: SET_PAGE_TITLE, pageTitle}
}
