module.exports = {
    setupTestFrameworkScriptFile: '<rootDir>test/setup.js',
    collectCoverage: true,
    coverageDirectory: 'coverage/',
    coverageReporters: ['lcov', 'text'],
    collectCoverageFrom: ['src/**/*.(js|jsx)'],
    coverageThreshold: {
        global: {
            branches: 77,
            functions: 59,
            lines: 62,
            statements: 61,
        },
    },
    testMatch: ['<rootDir>/test/**/*test.js'],
    transform: {
        '^.+\\.(js|jsx)$': 'babel-jest',
    },
    verbose: true,
    moduleNameMapper: {
        '^@core(.*)': '<rootDir>/src/core/$1',
        '.svg': '<rootDir>/test/__mocks__/fileMock.js',
    },
    modulePathIgnorePatterns: ['<rootDir>/src/index.js'],
};
