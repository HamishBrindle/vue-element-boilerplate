const path = require('path');
const sass = require('node-sass');
const sassUtils = require('node-sass-utils')(sass);
const sassVars = require('./src/assets/styles/json/_variables.json');

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        functions: {
          'get($keys)': (_keys) => {
            const keys = _keys.getValue().split('.');
            if (!keys || !(keys instanceof Array)) {
              return null;
            }
            const result = sassVars[keys[keys.length - 1]];
            return sassUtils.castToSass(result);
          },
        },
      },
    },
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        path.resolve(__dirname, 'src/assets/styles/globals/*.scss'),
      ],
      injector: 'append',
    },
  },
};
