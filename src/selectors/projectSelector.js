import _ from 'underscore';
import { createSelector } from 'reselect';

const projectSelector = state => state.projects;
const idSelector = state => state.page.projectId;

const getProject = (projects, selectedProjectId) => {
  const selectedProject = _.findWhere(
    projects,
    {id: selectedProjectId}
  );

  return selectedProject;
};

export default createSelector(
  projectSelector,
  idSelector,
  getProject
);
