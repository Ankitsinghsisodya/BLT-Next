import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    files: ["src/**/*.js"],
    languageOptions: {
      ecmaVersion: 2022,
      globals: {
        window: "readonly",
        document: "readonly",
        localStorage: "readonly",
        sessionStorage: "readonly",
        console: "readonly",
        setTimeout: "readonly",
        fetch: "readonly",
        FormData: "readonly",
        Map: "readonly",
        Date: "readonly",
        Math: "readonly",
        parseInt: "readonly",
        isNaN: "readonly",
      },
    },
    rules: {
      "no-unused-vars": "warn",
      "no-console": "off",
      "eqeqeq": "error",
      "no-var": "error",
    },
  },
];
