import toastr from 'toastr';
import { BEGIN_AJAX_CALL, END_AJAX_CALL, AJAX_CALL_ERROR  } from '../constants/actionTypes';

export function beginAjaxCall() {
  return { type: BEGIN_AJAX_CALL };
}

export function endAjaxCall() {
  return { type: END_AJAX_CALL };
}

export function ajaxCallError(message) {
  const errMssg = `Request Failed: ${message}`;
  toastr.error(errMssg);
  return { type: AJAX_CALL_ERROR };
}
