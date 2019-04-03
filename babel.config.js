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
        styleLibraryName: '~src/assets/styles/themes/element-ui',
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
