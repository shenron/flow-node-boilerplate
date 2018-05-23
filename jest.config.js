module.exports = {
  moduleFileExtensions: [
    'js',
  ],
  transform: {
    '^.+\\.js(?:\\.flow)?$': 'jest-flow-transform',
  },
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.js',
    '!lib',
    '!coverage/**',
    '!node_modules/**',
  ],
};
