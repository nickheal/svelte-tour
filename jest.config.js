module.exports = {
  coveragePathIgnorePatterns: ['/node_modules/', '/__tests__/utils'],
  collectCoverage: true,
  transform: {
    '^.+\\.svelte$': 'svelte-jester',
    '^.+\\.js$': 'babel-jest',
  },
  moduleFileExtensions: ['js', 'svelte'],
  moduleNameMapper: {
    '^src/(.*)': '<rootDir>/src/$1',
  },
  testMatch: [ '**/__tests__/**/*.spec.[jt]s?(x)' ],
  testPathIgnorePatterns: ['node_modules'],
  transformIgnorePatterns: [],
}
