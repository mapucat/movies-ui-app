import type { Config } from "jest";

const config: Config = {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  moduleNameMapper: {
    "\\.svg\\?react$": "<rootDir>/__mocks__/svg.mock.tsx",
  },
  setupFiles: ["<rootDir>/__mocks__/browserMocks.ts"],
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
