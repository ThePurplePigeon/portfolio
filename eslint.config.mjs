import nextVitals from "eslint-config-next/core-web-vitals";

const eslintConfig = [
  ...nextVitals,
];

eslintConfig.push({
  rules: {
    "react/no-unescaped-entities": "off",
    "@typescript-eslint/no-require-imports": "off"
  }
});

export default eslintConfig;
