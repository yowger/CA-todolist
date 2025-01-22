const { pathsToModuleNameMapper } = require("ts-jest")
const { compilerOptions } = require("./tsconfig.json")

module.exports = {
    roots: ["<rootDir>/"],
    preset: "ts-jest",
    testEnvironment: "node",
    testMatch: ["**/**/*.test.ts"],
    testPathIgnorePatterns: ["/node_modules/"],
    moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths || {}, {
        prefix: "<rootDir>/",
    }),
    moduleFileExtensions: ["ts", "js", "json", "node"],
    transform: {
        "^.+\\.ts?$": "ts-jest",
    },
    collectCoverage: true,
}
