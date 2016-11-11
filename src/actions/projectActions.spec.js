import expect from 'expect';
import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';
import {loremIpsum} from '../utils/loremIpsum';
import * as actions from './projectActions';
import * as types from '../constants/actionTypes';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);
const studentName = 'studenta';
const dummyProject = {
  "description": loremIpsum(150),
  "instructions": 'Do Stuff!',
  "history": {
    "created": "2007-03-07T14:48:22.000Z",
    "modified": "2007-03-07T14:48:22.000Z",
    "shared": "2007-03-07T14:48:22.000Z"
  },
  "stats": {
    "views": 669,
    "loves": 19,
    "favorites": 19,
    "comments": 58
  }
};

let idIncrementor = 0;

describe('Student Actions', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  describe('Update Student Project List', () => {
    it('should dispatch individual updates then a complete action', (done) => {
      // ARRANGE
      // nock api call
      const proj1 = Object.assign({}, dummyProject, {
        "id": idIncrementor++,
        "title": `${studentName} - Projecti 1`,
      });
      const proj2 = Object.assign({}, dummyProject, {
        "id": idIncrementor++,
        "title": `${studentName} - Projecti 2`,
      });

      const apiResult = [proj1, proj2];
      nock('https://api.scratch.mit.edu')
        // .log(console.log)
        .get(`/users/${studentName}/projects`)
        .reply(200, apiResult);

      const expectedActions = [
        { type: types.BEGIN_AJAX_CALL},
        { type: types.UPDATE_STUDENT_SUCCESS },
        { type: types.END_AJAX_CALL }
      ];
      const store = mockStore({projects: [], users: []}, expectedActions, done);

      // ACT
      store.dispatch(actions.updateStudentProjects(studentName))
        .then(() => {
          const storeActions = store.getActions();

          // ASSERT

          expect(storeActions.length).toEqual(3);
          expect(storeActions[0].type).toEqual(types.BEGIN_AJAX_CALL);
          expect(storeActions[1].type).toEqual(types.UPDATE_STUDENT_SUCCESS);
          expect(storeActions[1].projects).toEqual(apiResult);
          expect(storeActions[2].type).toEqual(types.END_AJAX_CALL);
          done();
        });
    });
  });
});
