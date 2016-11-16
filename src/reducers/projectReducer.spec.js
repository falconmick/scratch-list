import expect from 'expect';
import _ from 'underscore';
import projectReducer from './projectReducer';
import * as projectActions from '../actions/projectActions';

describe('Project Reducer', () => {
  describe('UPDATE_STUDENT_SUCCESS', () => {
    it('Should add new items to state', () => {
      const newState = projectReducer([], projectActions.updateStudentSuccess([{id: 1}, {id: 2}]));
      expect(newState[0].id).toEqual(1);
      expect(newState[1].id).toEqual(2);
    });
    it('Should overwrite old projects', () => {
      const newState = projectReducer([{id: 1, name: 'original'}, {id: 2, name: 'untouched'}],
                                      projectActions.updateStudentSuccess([{id: 1, name: 'overwrite'}, {id: 3, name: 'new'}]));

      const first = _.findWhere(newState, {id: 1});
      const second = _.findWhere(newState, {id: 2});
      const third = _.findWhere(newState, {id: 3});
      expect(first.name).toEqual('overwrite');
      expect(second.name).toEqual('untouched');
      expect(third.name).toEqual('new');
    });
  });
});
