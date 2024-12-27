const nx = require('@nx/eslint-plugin');
const reactThree = require('@react-three/eslint-plugin');
const baseConfig = require('../../eslint.config.cjs');

module.exports = [
  ...baseConfig,
  ...nx.configs['flat/react'],
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    plugins: {
      'react-three': reactThree,
    },
    // Override or add rules here
    rules: {},
  },
];
