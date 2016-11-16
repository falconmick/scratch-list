// More info on Webpack's Node API here: https://webpack.github.io/docs/node.js-api.html
// Allowing console calls below since this is a build file.
/* eslint-disable no-console */
import webpack from 'webpack';
var ncp = require('ncp').ncp;
import config from '../webpack.config.prod';
import {chalkError, chalkSuccess, chalkWarning, chalkProcessing} from './chalkConfig';

process.env.NODE_ENV = 'production'; // this assures React is built in prod mode and that the Babel dev config doesn't apply.

console.log(chalkProcessing('Generating minified bundle. This will take a moment...'));

webpack(config).run((error, stats) => {
  if (error) { // so a fatal error occurred. Stop here.
    console.log(chalkError(error));
    return 1;
  }

  const jsonStats = stats.toJson();

  if (jsonStats.hasErrors) {
    return jsonStats.errors.map(error => console.log(chalkError(error)));
  }

  if (jsonStats.hasWarnings) {
    console.log(chalkWarning('Webpack generated the following warnings: '));
    jsonStats.warnings.map(warning => console.log(chalkWarning(warning)));
  }

  console.log(`Webpack stats: ${stats}`);

  ncp('./docs', './tmp', (err) => {
    if(err) {
      return console.log(chalkError(err));
    }
    console.log(chalkSuccess('dev testing copy to tmp done'));
    ncp('./tmp', './docs/scratch-list', err => {
      if(err) {
        return console.log(chalkError(err));
      }
      console.log(chalkSuccess('dev testing copy done'));
    });

  });

  // if we got this far, the build succeeded.
  console.log(chalkSuccess('Your app is compiled in production mode in /docs. It\'s ready to roll!'));

  return 0;
});
