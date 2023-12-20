const { combineGlobPatterns } = require('nx/src/utils/globs');
const { dirname } = require('path');

export const createNodes = [
  combineGlobPatterns(['**/next.config.js']),
  (configFilePath, options, context) => {
    const projectRoot = dirname(configFilePath);
    console.log('>>> running foo plugin');
    return {
      projects: {
        [projectRoot]: {
          targets: {
            foo: {
              command: 'echo foo'
            }
          }
        }
      }

    }
  }
];

