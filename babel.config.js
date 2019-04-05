module.exports = {
  presets: [
    '@vue/app',
  ],
  plugins: [
    'wildcard', // For importing all files in a directory
    [
      'component',
      {
        libraryName: 'element-ui',
        styleLibraryName: '~src/assets/styles/vendor/element-ui/css',
      },
    ],
  ],
  env: {
    test: {
      presets: [
        [
          '@babel/preset-env',
          {
            targets: {
              node: 'current',
            },
          },
        ],
      ],
    },
  },
};
