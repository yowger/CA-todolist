module.exports = {
    roots: ["<rootDir>/"],
    preset: "ts-jest",
    testEnvironment: "node",
    testMatch: ["**/**/*.test.ts"],
    testPathIgnorePatterns: ["/node_modules/"],
    moduleFileExtensions: ["ts", "js", "json", "node"],
    transform: {
        "^.+\\.ts?$": "ts-jest",
    },
    collectCoverage: true,
}
