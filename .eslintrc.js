module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": "plugin:react/recommended",
    "parser": "@typescript-eslint/parser", // 识别路径别名
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module",
        "project": "./tsconfig.json",  // TS类型检查
        "tsconfigRootDir": "./"      // TS类型检查
    },
    "ignorePatterns": [".eslintrc.js", ".vscode", "I/*", "knowledge/*", ""],  // 不检查自身, I,knowledge
    "plugins": [
        "@typescript-eslint",   // 识别路径别名
        "import",              // 识别路径别名
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        "prefer-rest-params": "off",
        "prefer-spread": "off",
        "eol-last": 2,
        "no-undef": 2,
        "@typescript-eslint/interface-name-prefix": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/member-delimiter-style": "off",
        "@typescript-eslint/no-inferrable-types": "off",
        "@typescript-eslint/camelcase": "off",
        "@typescript-eslint/ban-ts-ignore": "off",
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/no-misused-promises": "off",
        "@typescript-eslint/unbound-method": "off",
        "@typescript-eslint/no-unnecessary-type-assertion": "off",
        "@typescript-eslint/no-unsafe-return": "off",
        "@typescript-eslint/no-unsafe-argument": "off",
        "@typescript-eslint/await-thenable": "off",
        "@typescript-eslint/ban-ts-comment": "off",
        "@typescript-eslint/require-await": "off",
        "@typescript-eslint/no-empty-interface": "off",
        "@typescript-eslint/semi": 2,
        "@typescript-eslint/triple-slash-reference": 0,
        "@typescript-eslint/no-unused-vars": ["warn"],
        "@typescript-eslint/explicit-module-boundary-types": 0,
        "@typescript-eslint/restrict-template-expressions": 1,
        "@typescript-eslint/no-unsafe-assignment": 0,
        "@typescript-eslint/no-floating-promises": 0,
        "@typescript-eslint/no-unsafe-member-access": 0,
        "@typescript-eslint/no-non-null-assertion": 0,
        "@typescript-eslint/no-explicit-any": 0,
        "@typescript-eslint/restrict-template-expressions": 0,
        "@typescript-eslint/no-unsafe-call": 0,
        "@typescript-eslint/restrict-plus-operands": 0,
        "@typescript-eslint/no-empty-function": 0,
        "@typescript-eslint/adjacent-overload-signatures": 0,
        "@typescript-eslint/no-unused-vars": 0,
        "@typescript-eslint/ban-types": 0,
        "@typescript-eslint/no-this-alias": 0,
        "no-constant-condition": 0,
        "no-extra-boolean-cast": 0,
        "no-useless-escape": 0,
        "no-case-declarations": "off",
        "no-async-promise-executor": 0,
        "react/display-name": "off",
        "react/prop-types": "warn",
        "react/no-string-refs": 0,
        "react/no-children-prop": 0,
        "react/jsx-no-target-blank": 0,
        "react/no-render-return-value": 0,
        "react/no-direct-mutation-state": "off",
        "react/no-unescaped-entities": "off",
        "react/no-find-dom-node": "off",
        "react/no-deprecated": "off",
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
        "jsx-quotes": [2, "prefer-double"]
    },
    "settings": { // 共享设置
        "react": {
            "pragma": "React",
            "version": "detect"
        },
        "import/parsers": {
            "@typescript-eslint/parser": [
                ".ts",
                ".tsx"
            ]
        },
        "import/resolver": {
            "node": {
                "extensions": [
                    ".ts",
                    ".tsx"
                ]
            },
            "typescript": {
                "extensions": [
                    ".ts",
                    ".tsx",
                    ".js",
                    ".jsx"
                ],
                "alwaysTryTypes": true
            }
        },
    }
}
