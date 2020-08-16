module.exports = {
  clearMocks: true,
  collectCoverage: true,
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  rootDir: '../../',
  collectCoverageFrom: [
    'src/components/**/*.jsx',
    'src/patterns/**/*.jsx',
    'src/pages/**/*.jsx',
    '!src/components/**/*.stories.jsx',
    '!src/patterns/**/*.stories.jsx',
  ],
  testEnvironment: 'jsdom',
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: [
    '\\\\node_modules\\\\',
  ],
  transform: {
    '^.+\\.[t|j]sx?$': 'babel-jest',
    '\\.svg$': '<rootDir>/config/jest/__mocks__/fileTransformer.js',
  },
  moduleFileExtensions: [
    'js',
    'jsx',
    'json',
  ],
  modulePaths: [
    '<rootDir>/node_modules/',
  ],
  moduleNameMapper: {
    '\\.(css|less|scss|sss|styl)$': '<rootDir>/node_modules/jest-css-modules',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/config/jest/__mocks__/fileMock.js',
  },
  unmockedModulePathPatterns: [
    '/^node_modules/',
  ],
};
