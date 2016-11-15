import store from './store';
import { setProjectId } from './actions/pageActions';

export function onProjectEnter(nextState) {
  const projectId = parseInt(nextState.params.id) || -1;
  store.dispatch(setProjectId(projectId));
}
