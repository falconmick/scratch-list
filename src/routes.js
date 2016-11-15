import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import ScratchList from './containers/ScratchList';
import ScratchViewer from './containers/ScratchViewer';
import { onProjectEnter } from './routerCallbacks';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={ScratchList}/>
    <Route path="project/:id" component={ScratchViewer} onEnter={onProjectEnter} />
    { /*<Route path="*" component={NotFoundPage}/>*/}
  </Route>
);
