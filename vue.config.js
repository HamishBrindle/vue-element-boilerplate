const path = require('path');

module.exports = {
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        path.resolve(__dirname, 'src/assets/styles/abstracts/*.scss'),
        // path.resolve(__dirname, 'src/assets/styles/vendor/_element-ui.scss'),
      ],
      injector: 'append',
    },
  },
};
