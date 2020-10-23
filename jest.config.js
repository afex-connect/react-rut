module.exports = {
  testRegex: '/__tests__/.*\\.spec\\.ts$',
  testPathIgnorePatterns: [
    '/dist/',
    '/node_modules/'
  ],
  preset: 'ts-jest',
  moduleFileExtensions: ['js', 'json', 'ts', 'node'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.ts$': 'ts-jest'
  },
  moduleDirectories: [
    'node_modules'
  ],
  globals: {
    'ts-jest': {
      tsConfig: '<rootDir>/src/__tests__/tsconfig.json',
      diagnostics: false
    }
  }
};
