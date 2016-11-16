import store from './store';
import { setProjectId } from './actions/pageActions';
import { updateStudentProjects } from './actions/projectActions';
import students from './constants/studentList';

export function renewStudentProjects() {
  for(let i = 0; i < students.length; i++) {
    const student = students[i];
    store.dispatch(updateStudentProjects(student));
  }
}

export function onProjectEnter(nextState) {
  const projectId = parseInt(nextState.params.id) || -1;
  store.dispatch(setProjectId(projectId));

  renewStudentProjects();
}
