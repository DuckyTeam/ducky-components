/**
 This file is here to enforce consistency and to some extent correctness in our codebase.
 When adding a new rule do a "npm run lint" with every option to find what causes the least
 amount of errors. That option will represent what we've been most consistently using
 naturally up to that point.

 Add a comment explaining every setting that uses nonstandard options (differs from 'setting: "2",')
 */


const LINE_LENGTH = 150;
const TAB_SPACES = 4;
const MAX_CHAINS_BEFORE_BREAK = 5;

module.exports = {
    env: {
        browser: true
    },

    parser: "babel-eslint",

    parserOptions: {
        ecmaVersion: 6,
        sourceType: "module",
        ecmaFeatures: {
            jsx: true
        }
    },

    plugins: [
        "react"
    ],

    root: true,

    rules: {
        // Possible Errors
        // The following rules point out areas where you might have made mistakes.

        "comma-dangle": 2,
        "no-cond-assign": 2,
        "no-console": 2,
        "no-constant-condition": 2,
        "no-control-regex": 2,
        "no-debugger": 2,
        "no-dupe-args": 2,
        "no-dupe-keys": 2,
        "no-duplicate-case": 2,
        "no-empty": 2,
        "no-empty-character-class": 2,
        "no-ex-assign": 2,
        "no-extra-boolean-cast": 2,
        "no-extra-parens": [2, "functions"],
        // Reason: React code conventions wants an extra parenthesis around components
        "no-extra-semi": 2,
        "no-func-assign": 2,
        "no-inner-declarations": 2,
        "no-invalid-regexp": 2,
        "no-irregular-whitespace": 2,
        "no-negated-in-lhs": 2,
        "no-obj-calls": 2,
        "no-regex-spaces": 2,
        "no-sparse-arrays": 2,
        "no-unexpected-multiline": 2,
        "no-unreachable": 2,
        "use-isnan": 2,
        "valid-jsdoc": 2,
        "valid-typeof": 2,
        // Best Practices
        // These are rules designed to prevent you from making mistakes.
        // They either prescribe a better way of doing something or help you avoid footguns.

        "accessor-pairs": 2,
        "array-callback-return": 2,
        "block-scoped-var": 2,
        "complexity": 2,
        "consistent-return": 2,
        "curly": 2,
        "default-case": 2,
        "dot-location": [2, "property"],
        "dot-notation": 2,
        "eqeqeq": 2,
        "guard-for-in": 2,
        "no-alert": 2,
        "no-caller": 2,
        "no-case-declarations": 2,
        "no-div-regex": 2,
        "no-else-return": 2,
        "no-empty-function": 2,
        "no-empty-pattern": 2,
        "no-eq-null": 2,
        "no-eval": 2,
        "no-extend-native": 2,
        "no-extra-bind": 2,
        "no-extra-label": 2,
        "no-fallthrough": 2,
        "no-floating-decimal": 2,
        "no-implicit-coercion": 2,
        "no-implicit-globals": 2,
        "no-implied-eval": 2,
        "no-invalid-this": 0,
        "no-iterator": 2,
        "no-labels": 2,
        "no-lone-blocks": 2,
        "no-loop-func": 2,
        "no-magic-numbers": [0, {ignore: [0]}],
        // Reason: By popular demand, several functions needs a 0 starting point
        "no-multi-spaces": 2,
        "no-multi-str": 2,
        "no-native-reassign": 2,
        "no-new": 2,
        "no-new-func": 2,
        "no-new-wrappers": 2,
        "no-octal": 2,
        "no-octal-escape": 2,
        "no-param-reassign": 2,
        "no-process-env": 2,
        "no-proto": 2,
        "no-redeclare": 2,
        "no-return-assign": 2,
        "no-script-url": 2,
        "no-self-assign": 2,
        "no-self-compare": 2,
        "no-sequences": 2,
        "no-throw-literal": 2,
        "no-unmodified-loop-condition": 2,
        "no-unused-expressions": 2,
        "no-unused-labels": 2,
        "no-useless-call": 2,
        "no-useless-concat": 2,
        "no-void": 2,
        "no-warning-comments": 2,
        "no-with": 2,
        "radix": 2,
        "vars-on-top": 2,
        "wrap-iife": 2,
        "yoda": 2,
        // Strict Mode
        // These rules relate to using strict mode and strict mode directives.

        "strict": 2,
        // Variables
        // These rules have to do with variable declarations.

        "init-declarations": 2,
        "no-catch-shadow": 2,
        "no-delete-var": 2,
        "no-label-var": 2,
        "no-shadow": 2,
        "no-shadow-restricted-names": 2,
        "no-undef": 2,
        "no-undef-init": 2,
        "no-undefined": 2,
        "no-unused-vars": [2, {"argsIgnorePattern": "^_" }],
        "no-use-before-define": 2,
        // Node.js and CommonJS
        // These rules are specific to JavaScript running on Node.js or using CommonJS in the browser.

        "callback-return": 2,
        "global-require": 2,
        "handle-callback-err": 2,
        "no-mixed-requires": 2,
        "no-new-require": 2,
        "no-path-concat": 2,
        "no-process-exit": 2,
        "no-restricted-imports": 2,
        "no-restricted-modules": 2,
        "no-sync": 2,
        // Stylistic Issues
        // These rules are purely matters of style and are quite subjective.

        "array-bracket-spacing": 2,
        "block-spacing": 2,
        "brace-style": 2,
        "camelcase": 2,
        "comma-spacing": 2,
        "comma-style": 2,
        "computed-property-spacing": 2,
        "consistent-this": 2,
        "eol-last": 2,
        "func-names": 2,
        "func-style": [2, "declaration", { "allowArrowFunctions": true }],
        "id-blacklist": 2,
        "id-length": 2,
        "id-match": 2,
        "indent": 2,
        "jsx-quotes": 2,
        "key-spacing": 2,
        "keyword-spacing": 2,
        "linebreak-style": 2,
        "lines-around-comment": 2,
        "max-depth": 2,
        "max-len": [2, LINE_LENGTH, TAB_SPACES],
        // Reason: By popular demand, the upper limit is set to the optional upper limit in pep8.
        "max-nested-callbacks": 2,
        "max-params": [2, 5],
        // Reason: Need more parameters for graphing-functions
        "max-statements": [2, 29],
        "new-cap": 2,
        "new-parens": 2,
        "newline-after-var": 2,
        "newline-per-chained-call": [2, {"ignoreChainWithDepth": MAX_CHAINS_BEFORE_BREAK}],
        // Reason: By popular demand, limit is set so that you can use typical props on one line.
        "no-array-constructor": 2,
        "no-bitwise": 2,
        "no-continue": 2,
        "no-inline-comments": 2,
        "no-lonely-if": 2,
        "no-mixed-spaces-and-tabs": 2,
        "no-multiple-empty-lines": 2,
        "no-negated-condition": 2,
        "no-nested-ternary": 2,
        "no-new-object": 2,
        "no-plusplus": 2,
        "no-restricted-syntax": 2,
        "no-spaced-func": 2,
        "no-ternary": 0,
        // Reason: By popular demand, they are very nice in react components
        "no-trailing-spaces": 2,
        "no-underscore-dangle": 0,
        // Reason: By popular demand, used for describing unused params
        "no-unneeded-ternary": 2,
        "no-whitespace-before-property": 2,
        "object-curly-spacing": 2,
        "one-var": 0,
        // Reason: Doesn't make much sense in an ES6 environment
        "one-var-declaration-per-line": 2,
        "operator-assignment": 2,
        "operator-linebreak": 2,
        "padded-blocks": [2, "never"],
        // Reason: Option with least errors when introduced
        "quote-props": [2, "as-needed"],
        // Reason: Option with least errors when introduced
        //"quotes": [2, "single", "avoid-escape"],
        // Reason: By popular demand
        "require-jsdoc": 0,
        // Reason: By popular demand, to verbose with pure react components.
        "semi": 2,
        "semi-spacing": 2,
        "sort-imports": 0,
        // Reason: By popular demand, we don't have side effect free imports everywhere
        // to verbose to override.
        "sort-vars": 2,
        "space-before-blocks": 2,
        "space-before-function-paren": [2, {anonymous: "always", named: "never"}],
        // Reason: Option with least errors when introduced
        "space-in-parens": 2,
        "space-infix-ops": 2,
        "space-unary-ops": 2,
        "spaced-comment": 2,
        "wrap-regex": 2,
        // ECMAScript 6
        // These rules are only relevant to ES6 environments.

        "arrow-body-style": 0,
        "arrow-parens": 2,
        "arrow-spacing": 2,
        "constructor-super": 2,
        "generator-star-spacing": 2,
        "no-class-assign": 2,
        "no-confusing-arrow": 2,
        "no-const-assign": 2,
        "no-dupe-class-members": 2,
        "no-new-symbol": 2,
        "no-this-before-super": 2,
        "no-useless-constructor": 2,
        "no-var": 2,
        "object-shorthand": 2,
        "prefer-arrow-callback": 2,
        "prefer-const": 2,
        "prefer-reflect": 0,
        // Reason d3 has its own 'call' function
        "prefer-rest-params": 2,
        "prefer-spread": 2,
        "prefer-template": 2,
        "require-yield": 2,
        "template-curly-spacing": 2,
        "yield-star-spacing": 2,
        // React specific linting rules for ESLint

        "react/display-name": 2,
        "react/forbid-prop-types": 0,
        "react/no-danger": 2,
        "react/no-deprecated": 2,
        "react/no-did-mount-set-state": 2,
        "react/no-did-update-set-state": 2,
        "react/no-direct-mutation-state": 2,
        "react/no-is-mounted": 2,
        "react/no-multi-comp": 2,
        "react/no-set-state": 2,
        "react/no-string-refs": 2,
        "react/no-unknown-property": 2,
        "react/prefer-es6-class": 2,
        "react/prop-types": 2,
        "react/react-in-jsx-scope": 2,
        "react/require-extension": 2,
        "react/self-closing-comp": 2,
        "react/sort-comp": 2,
        "react/sort-prop-types": 2,
        "react/wrap-multilines": 2,
        // JSX-specific rules

        "react/jsx-boolean-value": 2,
        "react/jsx-closing-bracket-location": 2,
        "react/jsx-curly-spacing": 2,
        "react/jsx-equals-spacing": 2,
        "react/jsx-handler-names": 2,
        "react/jsx-indent-props": 2,
        "react/jsx-indent": 2,
        "react/jsx-key": 2,
        "react/jsx-max-props-per-line": 2,
        "react/jsx-no-bind": 0,
        "react/jsx-no-duplicate-props": 2,
        "react/jsx-no-literals": 0,
        "react/jsx-no-undef": 2,
        "react/jsx-pascal-case": 2,
        "react/jsx-sort-props": 2,
        "react/jsx-space-before-closing": 2,
        "react/jsx-uses-react": 2,
        "react/jsx-uses-vars": 2
    }
};
