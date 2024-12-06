module.exports = {
    preset: 'react',
    transform: {
      '^.+\\.(js|jsx)$': 'babel-jest',
    },
    transformIgnorePatterns: [
      '/node_modules/(?!your-package-name-to-transform)/', // add any necessary packages here
    ],
  };
  