module.exports = {
  presets: [
    '@vue/app',
  ],
  plugins: [
    'wildcard', // For importing all files in a directory
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
