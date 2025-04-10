import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest', // Use ts-jest preset for TypeScript
  testEnvironment: 'jsdom', // Simulate DOM environment for React components
  setupFilesAfterEnv: ['<rootDir>/src/jest-setup.ts'], // Run setup file after env is ready
  moduleNameMapper: {
    // If you plan to use path aliases (e.g., "@/components/*"), configure them here
    // Example: '^@/(.*)$': '<rootDir>/src/$1',
  },
  // Automatically clear mock calls, instances, contexts and results before every test
  clearMocks: true,
  // Indicates which provider should be used to instrument code for coverage
  coverageProvider: "v8",
  // A map from regular expressions to paths to transformers
  transform: {
    '^.+\\.tsx?$': ['ts-jest', { /* ts-jest config options */ }],
  },
};

export default config;
