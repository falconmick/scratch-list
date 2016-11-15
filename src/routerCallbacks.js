import store from './store';
import { setProjectId } from './actions/projectActions';

export function onProjectEnter(nextState) {
  debugger;
  store.dispatch(setProjectId(nextState.params.id));
}
