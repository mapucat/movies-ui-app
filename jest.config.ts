import type { Config } from "jest";

const config: Config = {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  moduleNameMapper: {
    // "\\.svg\\?react$": "jest-transformer-svg",
    '\\.svg\\?react$': '<rootDir>/src/__mocks__/svg.mock.tsx',
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  verbose: true,
  coverageThreshold: {
    global: {
      lines: 80,
    },
  },
  resetMocks: true,
};

export default config;
